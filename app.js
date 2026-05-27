import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 🧠 BODY SYSTÉM
  let score = 0;

  const questions = [
    "q1","q2","q3","q4","q5",
    "q6","q7","q8","q9","q10"
  ];

  questions.forEach(id => {
    let val = document.getElementById(id).value.trim().length;

    if (val > 20) score += 1;
    if (val > 60) score += 1;
    if (val > 120) score += 1;
  });

  // 🎯 LIMIT
  let minScore = 45;

  let status = score >= minScore ? "PŘIJAT" : "NEPŘIJAT";

  // 💾 ULOŽENÍ DO FIREBASE
  await addDoc(collection(db, "applications"), {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    discord: document.getElementById("discord").value,

    score: score,
    status: status,

    created: new Date()
  });

  // 📢 VÝSLEDEK HRÁČI
  alert(
    "Přihláška odeslána!\n\n" +
    "Skóre: " + score + "/60\n" +
    "Výsledek: " + status + "\n\n" +
    "Kontaktujeme vás s dalším postupem."
  );

  form.reset();
});
