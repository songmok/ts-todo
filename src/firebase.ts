import { initializeApp } from "firebase/app";
// firestore Import
import { getFirestore } from "firebase/firestore";

// firebase Auth
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxYqtfyMRfQGicOxn6qmeTq-Rc7ltMe0c",
  authDomain: "ts-todo-4d7aa.firebaseapp.com",
  projectId: "ts-todo-4d7aa",
  storageBucket: "ts-todo-4d7aa.appspot.com",
  messagingSenderId: "245527466694",
  appId: "1:245527466694:web:6a98fc3b6f1f1f6661bdc7",
};

// 초기화
const app = initializeApp(firebaseConfig);
// firestor 내보기
export const fireDB = getFirestore(app);
// 인증하기
export const auth = getAuth(app);
