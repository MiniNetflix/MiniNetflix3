function login() {
  const users = {
    admin: '123',
    utente1: '123',
    utente2: '123',
    utente3: '123',
  };
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  if (users[username] === password) {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Credenziali non valide!";
  }
}
