/**
 * Conexão com o Firebase do DEsimulados (projeto desimulados-ferramentas).
 *
 * Esta configuração é pública por natureza (vai para o navegador de qualquer forma);
 * a proteção dos dados está nas regras do Firestore, não em esconder estas chaves.
 */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyChIUX9llvOWQoQLphbnClNYH2FjdeEpB4',
  authDomain: 'desimulados-ferramentas.firebaseapp.com',
  projectId: 'desimulados-ferramentas',
  storageBucket: 'desimulados-ferramentas.firebasestorage.app',
  messagingSenderId: '22202327683',
  appId: '1:22202327683:web:bc2c171c5d1f41627ff1b6',
});

export const auth = getAuth(app);
export const db = getFirestore(app);
