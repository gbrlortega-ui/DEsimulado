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
  signOut as fbSignOut,
  type User,
} from 'firebase/auth';
import { deleteDoc, doc, getDoc, initializeFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import type { HistoryEntry } from './history';
import type { SavedQuiz } from './progress';

// Configuração pública do app web (não é segredo: o acesso é controlado pelas regras do Firestore).
const app = initializeApp({
  apiKey: 'AIzaSyChIUX9llvOWQoQLphbnClNYH2FjdeEpB4',
  // No site oficial, a janela do Google mostra "desimulados.com.br": o login passa pelo próprio
  // domínio (/__/auth/*, repassado ao Firebase pelo vercel.json). Em outros endereços, o padrão.
  authDomain: /(^|\.)desimulados\.com\.br$/.test(location.hostname)
    ? location.host
    : 'desimulados-ferramentas.firebaseapp.com',
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
  /** Quando o aluno apagou o histórico (ms): simulados anteriores não voltam de outros aparelhos. */
  limpoEm: number;
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

/**
 * Login sempre por janela (popup): funciona em todos os navegadores, inclusive Safari/iOS, que
 * bloqueiam o login "na própria aba" quando o site não está no Firebase Hosting.
 * Precisa ser chamado direto no toque do aluno (sem esperar nada antes), senão a janela é bloqueada.
 */
export async function signInWithGoogle() {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    const code = (err as { code?: string }).code;
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
    limpoEm: typeof d?.limpoEm === 'number' ? d.limpoEm : 0,
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

/**
 * Exclui os dados e a conta. Se o último login foi há mais de alguns minutos, o Google exige confirmar
 * a conta antes — isso é feito PRIMEIRO, para não apagar os dados e deixar a conta para trás.
 */
export async function deleteAccount() {
  const u = auth.currentUser;
  if (!u) return;
  const last = Date.parse(u.metadata.lastSignInTime ?? '') || 0;
  if (Date.now() - last > 4 * 60 * 1000) {
    await reauthenticateWithPopup(u, provider);
  }
  await deleteDoc(ref(u.uid));
  await deleteUser(u);
}
