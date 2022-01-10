const h1 = document.querySelector(".hello h1");

console.dir(h1);

// function handTitleClick(){
//    if(h1.style.color === "blue") {
//        h1.style.color = "tomato";
//    } else {
//        h1.style.color = "blue";
//    }
// }

// function handTitleClick(){
//     h1.className = "active";
// }

function handTitleClick(){
    const clickedClass = "clicked"
    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handTitleClick);
