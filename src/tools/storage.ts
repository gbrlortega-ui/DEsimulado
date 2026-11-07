/**
 * Armazenamento da VERSÃO DE TESTE de "Outras ferramentas".
 *
 * Aqui tudo fica no localStorage do navegador — serve só para mostrar o fluxo.
 * Na versão final, contas e documentos vão para um backend com autenticação
 * (ex.: Firebase Auth + Firestore), e nada disto deve ser usado em produção.
 */
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

interface Store {
  users: Record<string, { name: string; passHash: string }>;
  docs: Record<string, ToolDoc[]>;
}

const KEY = 'desim-ferramentas-teste-v1';
const SESSION = 'desim-ferramentas-sessao';

function load(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Store;
  } catch {
    /* navegador sem armazenamento: segue vazio */
  }
  return { users: {}, docs: {} };
}

function save(store: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* ignora */
  }
}

async function hash(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export interface Session {
  email: string;
  name: string;
}

export function currentSession(): Session | null {
  try {
    const email = localStorage.getItem(SESSION);
    if (!email) return null;
    const user = load().users[email];
    return user ? { email, name: user.name } : null;
  } catch {
    return null;
  }
}

export async function signUp(name: string, email: string, password: string): Promise<Session> {
  const store = load();
  const key = email.trim().toLowerCase();
  if (store.users[key]) throw new Error('Já existe uma conta com este e-mail.');
  store.users[key] = { name: name.trim(), passHash: await hash(key + ':' + password) };
  store.docs[key] = [];
  save(store);
  try {
    localStorage.setItem(SESSION, key);
  } catch {
    /* ignora */
  }
  return { email: key, name: name.trim() };
}

export async function signIn(email: string, password: string): Promise<Session> {
  const store = load();
  const key = email.trim().toLowerCase();
  const user = store.users[key];
  if (!user || user.passHash !== (await hash(key + ':' + password))) {
    throw new Error('E-mail ou senha incorretos.');
  }
  try {
    localStorage.setItem(SESSION, key);
  } catch {
    /* ignora */
  }
  return { email: key, name: user.name };
}

export function signOut() {
  try {
    localStorage.removeItem(SESSION);
  } catch {
    /* ignora */
  }
}

export function listDocs(email: string): ToolDoc[] {
  return (load().docs[email] ?? []).slice().sort((a, b) => b.updatedAt - a.updatedAt);
}

export function saveDoc(email: string, doc: ToolDoc) {
  const store = load();
  const list = store.docs[email] ?? [];
  const i = list.findIndex((d) => d.id === doc.id);
  if (i >= 0) list[i] = doc;
  else list.push(doc);
  store.docs[email] = list;
  save(store);
}

export function deleteDoc(email: string, id: string) {
  const store = load();
  store.docs[email] = (store.docs[email] ?? []).filter((d) => d.id !== id);
  save(store);
}

export const newId = () =>
  (crypto.randomUUID?.() ?? Math.random().toString(36).slice(2) + Date.now().toString(36));
