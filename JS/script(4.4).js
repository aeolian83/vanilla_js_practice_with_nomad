const loginform = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginform.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     greeting.innerText = "Hello " + username;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

function onLoginSubmit(event) {
  event.preventDefault();
  loginform.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginform.addEventListener("submit", onLoginSubmit);
