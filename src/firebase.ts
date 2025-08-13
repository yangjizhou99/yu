import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// —— 工具函数 —— //
export async function ensureAnonAuth() {
  const { user } = await signInAnonymously(auth);
  return user.uid;
}

export type CloudSave = {
  cver: number;
  nextId: number;
  fish: any[];
  food: any[];
};

const pondDocRef = (id: string) => doc(db, "ponds", id);

export async function loadCloud(pondId: string): Promise<CloudSave | null> {
  const snap = await getDoc(pondDocRef(pondId));
  return snap.exists() ? (snap.data() as CloudSave) : null;
}

export async function saveCloud(pondId: string, data: CloudSave) {
  await setDoc(pondDocRef(pondId), { ...data, updatedAt: serverTimestamp() });
}

export function listenCloud(pondId: string, callback: (data: CloudSave) => void) {
  // ... existing implementation ...
}

// —— 新增：贴图存储工具 —— //
export async function sha256Base64(dataUrl: string): Promise<string> {
  const bin = atob(dataUrl.split(",")[1] || "");
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  const digest = await crypto.subtle.digest("SHA-256", buf);
  const b64 = btoa(String.fromCharCode(...new Uint8Array(digest)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

const textureDocRef = (id: string) => doc(db, "textures", id);

export async function putTextureIfAbsent(id: string, dataUrl: string) {
  const snap = await getDoc(textureDocRef(id));
  if (!snap.exists()) {
    await setDoc(textureDocRef(id), { id, dataUrl, createdAt: serverTimestamp() });
  }
}

export async function getTextureDataUrl(id: string): Promise<string | null> {
  const snap = await getDoc(textureDocRef(id));
  return snap.exists() ? (snap.data().dataUrl as string) : null;
}
