import { db } from "./firebase.js";
import { collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const list = document.getElementById("list");

async function load() {
  const snap = await getDocs(collection(db, "applications"));

  snap.forEach(d => {
    const data = d.data();

    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${data.name}</h3>
      <p>Discord: ${data.discord}</p>
      <p>Score: ${data.score}</p>
      <p>Status: ${data.status}</p>

      <button onclick="set('${d.id}','PŘIJAT')">PŘIJAT</button>
      <button onclick="set('${d.id}','NEPŘIJAT')">NEPŘIJAT</button>
      <hr>
    `;

    list.appendChild(div);
  });
}

window.set = async (id, status) => {
  await updateDoc(doc(db, "applications", id), {
    status: status
  });

  alert("Uloženo: " + status);
  location.reload();
};

load();
