/**
 * Conta opcional do aluno (Firebase). Este arquivo só é baixado quando o aluno entra
 * ou já tinha entrado antes — quem usa sem conta não carrega nada do Firebase.
 *
 * Dados: um documento por aluno em `alunos/{uid}` (regras em firestore.rules).
 */
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithPopup,
  signInWithPopup,
  signInWithRedirect,
  signOut as fbSignOut,
  type User,
} from 'firebase/auth';
import { deleteDoc, doc, getDoc, initializeFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import type { HistoryEntry } from './history';
import type { SavedQuiz } from './progress';

// Configuração pública do app web (não é segredo: o acesso é controlado pelas regras do Firestore).
const app = initializeApp({
  apiKey: 'AIzaSyChIUX9llvOWQoQLphbnClNYH2FjdeEpB4',
  authDomain: 'desimulados-ferramentas.firebaseapp.com',
  projectId: 'desimulados-ferramentas',
  storageBucket: 'desimulados-ferramentas.firebasestorage.app',
  messagingSenderId: '22202327683',
  appId: '1:22202327683:web:bc2c171c5d1f41627ff1b6',
});
const auth = getAuth(app);
auth.languageCode = 'pt-BR';
// O simulado salvo pode ter campos opcionais vazios (undefined), que o Firestore recusaria.
const db = initializeFirestore(app, { ignoreUndefinedProperties: true });
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export interface CloudUser {
  uid: string;
  name: string;
  email: string;
  photo?: string;
}

export interface CloudData {
  historico: HistoryEntry[];
  emAndamento: SavedQuiz | null;
}

export interface LoadedCloud extends CloudData {
  /** O aluno já tinha documento salvo (false no primeiro login). */
  exists: boolean;
}

const toUser = (u: User): CloudUser => ({
  uid: u.uid,
  name: u.displayName ?? u.email ?? 'Aluno',
  email: u.email ?? '',
  photo: u.photoURL ?? undefined,
});

export function watchUser(cb: (user: CloudUser | null) => void) {
  return onAuthStateChanged(auth, (u) => cb(u ? toUser(u) : null));
}

export async function signInWithGoogle() {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    const code = (err as { code?: string }).code;
    // Navegador bloqueou a janela (comum no celular): faz o login na própria aba.
    if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
      await signInWithRedirect(auth, provider);
      return;
    }
    if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return;
    throw err;
  }
}

export const signOut = () => fbSignOut(auth);

const ref = (uid: string) => doc(db, 'alunos', uid);

export async function loadCloud(uid: string): Promise<LoadedCloud> {
  const snap = await getDoc(ref(uid));
  const d = snap.data();
  return {
    exists: snap.exists(),
    historico: Array.isArray(d?.historico) ? d.historico : [],
    emAndamento: d?.emAndamento ?? null,
  };
}

/** Grava (mesclando) o que mudou no documento do aluno. */
export async function saveCloud(user: CloudUser, data: Partial<CloudData>, first = false) {
  await setDoc(
    ref(user.uid),
    {
      ...data,
      nome: user.name,
      email: user.email,
      atualizadoEm: serverTimestamp(),
      ...(first ? { criadoEm: serverTimestamp() } : {}),
    },
    { merge: true }
  );
}

/** Exclui os dados e a conta. Se o Google exigir login recente, pede para confirmar a conta. */
export async function deleteAccount() {
  const u = auth.currentUser;
  if (!u) return;
  await deleteDoc(ref(u.uid));
  try {
    await deleteUser(u);
  } catch (err) {
    if ((err as { code?: string }).code !== 'auth/requires-recent-login') throw err;
    await reauthenticateWithPopup(u, provider);
    await deleteUser(u);
  }
}
