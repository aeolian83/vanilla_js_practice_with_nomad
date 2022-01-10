

// const hellos = document.getElementsByClassName("hello1")

// console.log(hellos);

// const title = document.querySelector(".hello h2");

// console.log(title);

// const title = document.querySelectorAll(".hello h2")

// console.log(title)

const title = document.querySelector(".hello h2:first-child")
const title1 = document.querySelector(".hello h2:nth-child(2)")

console.log(title)
console.log(title1)

title.innerText = "Hello there~~!!!"