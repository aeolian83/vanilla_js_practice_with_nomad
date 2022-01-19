function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}


console.log("Hello!");
sayHello("nico", 10);
sayHello("dal", 23);
sayHello('lynn', 21);

function plus(a, b){
    console.log(a + b);
}

plus();
plus(8, 60)

function divide(a, b){
    console.log(a / b);
}

divide(60, 8);


const player = {
    name: "Jungki",
    sayHello: function (otherPersonsName){
        console.log("Hello!!! " + otherPersonsName + " Nice to meet you");
    },
}

player.sayHello();

player.sayHello("Lynn");