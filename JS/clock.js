const clock = document.querySelector("#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000);

// "1".padStart(3, "0");
// console.log("1".padStart(3, "0"));
// console.log("1".padEnd(3, "0"));
// console.log("hello".padStart(10, "x"));

getClock()
setInterval(getClock, 1000);