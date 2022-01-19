const clock = document.querySelector("#clock");


function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// setInterval(sayHello, 5000);

getClock()
setInterval(getClock, 1000);