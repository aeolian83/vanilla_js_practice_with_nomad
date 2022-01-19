const title = document.querySelector(".hello h1");

// console.log(title);
// console.dir(title);

// title.style.color = "teal";

// function handTitleClick(){
//     console.log("Title wad clicked!!");
// }

// title.addEventListener("click", handTitleClick);

console.dir(title);

function handTitleClick(){
    title.style.color = "teal";
}

function handMouseEnter (){
    title.innerText = "Mouse is Here!!";
}

function handMouseLeave(){
    title.innerText = "Mouse is Gone!!";
}

title.addEventListener("click", handTitleClick);
title.addEventListener("mouseenter", handMouseEnter);
title.addEventListener("mouseleave", handMouseLeave);