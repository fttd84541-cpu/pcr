import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  let score = 0;

  const qs = document.querySelectorAll("textarea");

  qs.forEach(q => {
    let len = q.value.length;

    if (len > 20) score += 1;
    if (len > 60) score += 1;
    if (len > 120) score += 1;
  });

  let status = score >= 45 ? "PŘIJAT" : "NEPŘIJAT";

  await addDoc(collection(db, "applications"), {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    discord: document.getElementById("discord").value,
    score: score,
    status: status,
    created: new Date()
  });

  alert("Odesláno!\nSkóre: " + score + "\nStatus: " + status);

  document.getElementById("form").reset();
});
