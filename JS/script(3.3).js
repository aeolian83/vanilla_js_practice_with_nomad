const title = document.querySelector(".hello h1");

// console.log(title);
// console.dir(title);

// title.style.color = "teal";

// function handTitleClick(){
//     console.log("Title wad clicked!!");
// }

// title.addEventListener("click", handTitleClick);

function handTitleClick(){
    title.style.color = "teal";
}

title.addEventListener("click", handTitleClick);