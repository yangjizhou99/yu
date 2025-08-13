// src/firebase.ts
import { initializeApp } from "firebase/app";
import {
  getFirestore, enableIndexedDbPersistence,
  doc, getDoc, setDoc, onSnapshot, serverTimestamp
} from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// 离线优先（可选，省读写）
enableIndexedDbPersistence(db).catch(() => { /* 多 tab 时会失败，忽略即可 */ });

export async function ensureAnonAuth(): Promise<string> {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (u) => {
      if (u) return resolve(u.uid);
      await signInAnonymously(auth);
    });
  });
}

// 云端文档路径：/ponds/{pondId}
export const pondDocRef = (pondId: string) => doc(db, "ponds", pondId);

// 类型提示（云端轻量版）
export type CloudSave = {
  cver: 1;                // 云存版本
  updatedAt?: any;        // serverTimestamp
  nextId: number;
  fish: Array<any>;       // 轻量：不含 textureDataUrl
  food: Array<any>;
};
 
export async function loadCloud(pondId: string): Promise<CloudSave | null> {
  const snap = await getDoc(pondDocRef(pondId));
  return snap.exists() ? (snap.data() as CloudSave) : null;
}

export async function saveCloud(pondId: string, data: CloudSave) {
  await setDoc(pondDocRef(pondId), { ...data, updatedAt: serverTimestamp() }, { merge: true });
}

export function listenCloud(pondId: string, cb: (data: CloudSave) => void) {
  return onSnapshot(pondDocRef(pondId), (snap) => {
    if (snap.exists()) cb(snap.data() as CloudSave);
  });
}
