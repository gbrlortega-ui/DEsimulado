/**
 * Contas e documentos de "Outras ferramentas" no Firebase (projeto desimulados-ferramentas).
 *
 * - Login: Firebase Authentication (e-mail e senha).
 * - Documentos: Firestore, coleção `docs`, cada um com `owner` = uid do aluno.
 *   As regras de segurança (firestore.rules) garantem que só o dono lê e grava,
 *   e recusam qualquer campo de nome de paciente.
 * - O nome do paciente nunca chega aqui: vira iniciais no navegador (forms.ts).
 */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile,
  type User,
} from 'firebase/auth';
import { collection, deleteDoc as fbDeleteDoc, doc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore';
import { auth, db } from './firebase';
import type { ToolKind } from './forms';

export interface ToolDoc {
  id: string;
  kind: ToolKind;
  title: string;
  temas: string[];
  data: Record<string, string>;
  createdAt: number;
  updatedAt: number;
}

export interface Session {
  uid: string;
  email: string;
  name: string;
}

const toSession = (u: User): Session => ({
  uid: u.uid,
  email: u.email ?? '',
  name: u.displayName || (u.email ?? '').split('@')[0],
});

/** Mensagens do Firebase em português, para o aluno entender o que houve. */
export function authMessage(err: unknown): string {
  const code = (err as { code?: string })?.code ?? '';
  const map: Record<string, string> = {
    'auth/email-already-in-use': 'Já existe uma conta com este e-mail. Use "Entrar".',
    'auth/invalid-email': 'E-mail inválido.',
    'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
    'auth/invalid-credential': 'E-mail ou senha incorretos.',
    'auth/wrong-password': 'E-mail ou senha incorretos.',
    'auth/user-not-found': 'E-mail ou senha incorretos.',
    'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos e tente de novo.',
    'auth/network-request-failed': 'Sem conexão com a internet.',
    'permission-denied': 'Você não tem permissão para esta ação.',
    unavailable: 'Sem conexão com o servidor. Tente de novo em instantes.',
  };
  return map[code] ?? 'Não foi possível concluir. Tente de novo.';
}

export function watchSession(cb: (s: Session | null) => void): () => void {
  return onAuthStateChanged(auth, (u) => cb(u ? toSession(u) : null));
}

export async function signUp(name: string, email: string, password: string): Promise<Session> {
  const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
  await updateProfile(cred.user, { displayName: name.trim() });
  await setDoc(doc(db, 'users', cred.user.uid), {
    name: name.trim(),
    email: cred.user.email,
    acceptedAnonymization: true,
    createdAt: serverTimestamp(),
  });
  return toSession(cred.user);
}

export async function signIn(email: string, password: string): Promise<Session> {
  const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
  return toSession(cred.user);
}

export async function resetPassword(email: string): Promise<void> {
  auth.languageCode = 'pt-BR';
  await sendPasswordResetEmail(auth, email.trim());
}

export function signOut() {
  return fbSignOut(auth);
}

export async function listDocs(uid: string): Promise<ToolDoc[]> {
  const snap = await getDocs(query(collection(db, 'docs'), where('owner', '==', uid)));
  return snap.docs
    .map((d) => {
      const v = d.data();
      return {
        id: d.id,
        kind: v.kind,
        title: v.title ?? '',
        temas: Array.isArray(v.temas) ? v.temas : [],
        data: v.data ?? {},
        createdAt: v.createdAt ?? 0,
        updatedAt: v.updatedAt ?? 0,
      } as ToolDoc;
    })
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

/** Limite de um documento no Firestore é 1 MB; guardamos folga para as imagens. */
export const MAX_DOC_BYTES = 900_000;
export const docBytes = (d: ToolDoc) => new Blob([JSON.stringify(d)]).size;

export async function saveDoc(uid: string, d: ToolDoc): Promise<void> {
  if (docBytes(d) > MAX_DOC_BYTES) {
    throw Object.assign(new Error('too-large'), { code: 'too-large' });
  }
  // remove campos vazios para manter o documento enxuto
  const data = Object.fromEntries(Object.entries(d.data).filter(([, v]) => typeof v === 'string' && v !== ''));
  await setDoc(doc(db, 'docs', d.id), {
    owner: uid,
    kind: d.kind,
    title: d.title,
    temas: d.temas,
    data,
    createdAt: d.createdAt,
    updatedAt: d.updatedAt,
  });
}

export async function deleteDoc(id: string): Promise<void> {
  await fbDeleteDoc(doc(db, 'docs', id));
}

export const newId = () => doc(collection(db, 'docs')).id;
