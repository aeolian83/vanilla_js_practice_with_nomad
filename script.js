const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
console.log(parseInt('dfdfdfdfd'))
console.log(typeof parseInt('dfdfdfdfd'))
console.log("")


if(isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}