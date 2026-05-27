import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzjuuppj_zuqA_FRG7WIug68P7SCpbsUI",
  authDomain: "praguerppcr.firebaseapp.com",
  projectId: "praguerppcr",
  storageBucket: "praguerppcr.appspot.com",
  messagingSenderId: "111189472977",
  appId: "111189472977:web:b123432642b851490cf7f0",
  databaseURL: "https://praguerppcr-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
