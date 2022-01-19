const loginform = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginform.classList.add(HIDDEN_CLASSNAME);
//   localStorage.setItem(USERNAME_KEY, loginInput.value);
//   paintGreetings();
// }

// function paintGreetings() {
//   const username = localStorage.getItem(USERNAME_KEY);
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   // show the form
//   loginform.classList.remove(HIDDEN_CLASSNAME);
//   loginform.addEventListener("submit", onLoginSubmit);
// } else {
//   // show the greeting
//   paintGreetings();
// }


function onLoginSubmit(event) {
  event.preventDefault();
  loginform.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginform.classList.remove(HIDDEN_CLASSNAME);
  loginform.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}