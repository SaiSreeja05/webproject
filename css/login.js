const passwordInput = document.getElementById("password");
const showBtn = document.getElementById("showPassword");

showBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showBtn.textContent = "Show";
  }
});
const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Please enter both Email and Password.");
    return;
  }


  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Login successful! (Demo only)");
});

document.getElementById("googleLogin").addEventListener("click", () => {
  alert("Google Login coming soon!");
});