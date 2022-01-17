const loginform = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const link = document.querySelector("a");



// function handleLoginBtnClick() {
//     const username = loginInput.value;
//     if (username === "") {
//         alert("Please whrite your name");
//     } else if(username.length > 15) {
//         alert("Your name is too long.");
//     }
// }


// function onLoginSubmit(tomato) {
//     tomato.preventDefault();
//     // const username = loginInput.value;
//     // console.log(username);
//     console.log(tomato);
// }

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

// loginButton.addEventListener("click", handleLoginBtnClick)

loginform.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// handleLinkClick({information about the event that just happened})