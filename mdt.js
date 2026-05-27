function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "PCR01" && p === "1234") {
    window.location.href = "mdt.html";
  } else {
    alert("Špatné přihlášení");
  }
}
