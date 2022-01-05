const age = 96;

function caculateKrAge(ageOfForeiner){
    return ageOfForeiner + 2;
}

const krAge = caculateKrAge(age);

console.log(krAge);



calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multi: function (a, b) {
        return a * b;
    },
    power: function (a, b) {
        return a**b;
    },
}

const addResult = calculator.add(1, 5);
const minusResult = calculator.minus(addResult, 3)

console.log(addResult);
console.log(minusResult);

calculator.minus(1, 5);
calculator.divide(6, 3);
calculator.multi(3, 7);
calculator.power(2, 5);