const h1 = document.querySelector(".hello h1");

console.dir(h1);

//function handTitleClick(){
//    if(h1.style.color === "blue") {
//        h1.style.color = "tomato";
//    } else {
//        h1.style.color = "blue";
//    }
//}

// function handTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

function handTitleClick(){
    const currentColor = h1.style.color;
    if(currentColor === "blue") {
        currentColor = "tomato";
    } else {
        currentColor = "blue";
    }
    h1.style.color = currentColor;
}

h1.addEventListener("click", handTitleClick);
