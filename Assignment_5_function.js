//Question 1
var prompt = require('prompt-sync')();

var x = Number(prompt("Enter the value of x: "));
function calculate(x) {
    var y = x**2 + 2*x + 6;
    console.log(y);
}

calculate(x);
//Question 2
var prompt = require('prompt-sync')();

var number1 = Number(prompt("Enter first number: "));
var number2 = Number(prompt("Enter second number: "));
function summation(number1, number2){
    return number1 + number2
}
function subtraction(number1, number2){
    return number1 - number2
}
function multiplication(number1, number2){
    return number1 * number2
}
function calculate_Result(number1, number2, summation, subtraction, multiplication){
    console.log(summation(number1, number2))
    console.log(subtraction(number1, number2))
    console.log(multiplication(number1, number2))
}
calculate_Result(number1, number2, summation, subtraction, multiplication)

//Question 3
function greet(name="Guest"){
    console.log("Welcome", name)
}
greet()

//Question 4
var array=[2,4,6,8,10];
var squre_num=array.map((num)=>num**2)
console.log("The Result Array is ",squre_num)
