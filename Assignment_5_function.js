//Question 1

/* 1. Write code in JS: 
Suppose we have an equation: Y = x^2 + 2x + 6. Write a function that will take the value of x as a parameter and return the value of Y.
*/
var prompt = require('prompt-sync')();

var x = Number(prompt("Enter the value of x: "));
function calculate(x) {
    var y = x**2 + 2*x + 6;
    console.log(y);
}

calculate(x);

//Question 2

/* 2. Write code in JS :
Write a function that will take two numbers and three callback functions as parameters. 
Calculate the summation, subtraction, and multiplication of the numbers using callback functions. Finally, display the results.
*/
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

/* 3. Write code in JS
Write a function that takes only the name of the user as a parameter and displays a welcome message. The default value of the user's name will be “guest”.
*/
function greet(name="Guest"){
    console.log("Welcome", name)
}
greet()

//Question 4

/* 4. Run the below code in JS, write your output:
Suppose you have an array containing a few numbers, now use the “. map()” method of the array to square all the numbers of the array.
*/
var array=[2,4,6,8,10];
var squre_num=array.map((num)=>num**2)
console.log("The Result Array is ",squre_num)
