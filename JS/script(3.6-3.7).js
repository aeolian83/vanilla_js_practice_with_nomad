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
        h1.className = clickedClass;  // 이렇게 하면 말그대로 클래스를 바꿔 버림, 혹시라도 이전에 다른 클래스가 있다면 그런 사라진다.
    }
}

h1.addEventListener("click", handTitleClick);
