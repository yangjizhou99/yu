import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
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
  docRev?: number;
};

const pondDocRef = (id: string) => doc(db, "ponds", id);

export async function loadCloud(pondId: string): Promise<CloudSave | null> {
  const snap = await getDoc(pondDocRef(pondId));
  return snap.exists() ? (snap.data() as CloudSave) : null;
}

function cleanForFirestore<T>(val: T): T {
  if (Array.isArray(val)) return val.map(cleanForFirestore) as any;
  if (val && typeof val === "object") {
    const out: any = {};
    for (const [k, v] of Object.entries(val as any)) {
      if (v === undefined) continue;
      out[k] = cleanForFirestore(v as any);
    }
    return out;
  }
  if (typeof val === "number" && Number.isNaN(val)) return null as any;
  return val;
}

export async function saveCloud(pondId: string, data: CloudSave) {
  const safeData = cleanForFirestore({ ...data, updatedAt: serverTimestamp() });
  await setDoc(pondDocRef(pondId), safeData);
}

export function listenCloud(pondId: string, callback: (data: CloudSave) => void) {
  const unsub = onSnapshot(pondDocRef(pondId), (doc) => {
    if (doc.exists()) {
      callback(doc.data() as CloudSave);
    }
  });
  return unsub;
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
