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

function handWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handWindowCopy(){
    alert("copier!!");
}

function handWindowOffline(){
    alert("SOS no WIFI");
}

function handWindowOnline(){
    alert("All good!!");
}

title.onclick = handTitleClick;  // 이렇게 하는 것은 그렇게 좋지는 않다. 
title.addEventListener("mouseenter", handMouseEnter);
title.addEventListener("mouseleave", handMouseLeave);

// title.removeEventListener()

window.addEventListener("resize", handWindowResize);
window.addEventListener("copy", handWindowCopy);
window.addEventListener("offline", handWindowOffline);
window.addEventListener("online", handWindowOnline);