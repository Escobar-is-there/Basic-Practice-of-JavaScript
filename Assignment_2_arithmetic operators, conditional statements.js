// Question 1

/* 1. Write code in JS: 
Suppose you have a login system where you can log in by using only any of three names.
1) Determine three names inside your code.
2) Write a code that takes the user input.
3) If the user provided name doesn’t match with none of your predetermined names it will display “Sorry! We don’t find you in the system.” Otherwise, it will display “Welcome!”
*/
var prompt = require('prompt-sync')();
var firstname = "Rafiqul";
var middlename = "Alam";
var lastname = "Imtiaj";
var userinput1 = prompt("enter your first name :");
var userinput2 = prompt("enter your middle name :");
var userinput3 = prompt("enter your last name :");
if (userinput1 == firstname && userinput2 == middlename && userinput3 == lastname) {
    console.log("Welcome! ",firstname,middlename,lastname)
} 
else {
  console.log("Sorry!We don't find you in the system.")  
}

// Question 2

/* 2. Write code in JS: Write a code that prompts the user to enter a year. The code should display a message indicating whether the year is a leap year or not.
*/
var prompt = require('prompt-sync')();
var year = prompt("enter a year : ")
if (year%4==0) {
    console.log(year ,"is a leap year")
} else {
    console.log(year ,"is not a leap year")
}

// Question 3

/* 3. Run the below code in JS, write your output:
Write a code that calculates the final grade for a student based on their scores in different subjects. The program should:
1) Prompt the user to enter the scores for three subjects: Math, English, and Science.
2) Calculate the average score using the formula: average = (mathScore + englishScore + scienceScore) / 3.
3) Display the final average score.
4) Use conditional statements to determine and display the corresponding letter grade based on the following grading scale:
A:  > 60 
F: <60
*/
var prompt = require('prompt-sync')();
var mathScore = Number(prompt("Enter your Math score: "));
var englishScore = Number(prompt("Enter your English score: "));
var scienceScore = Number(prompt("Enter your Science score: "));
var average = (mathScore + englishScore + scienceScore) / 3;
console.log("Your average score is: " + average);

if (average > 60) {
    console.log("Great!!! Your final grade is: A");
} else {
    console.log("Sorry.Your final grade is: F");
}

// Question 4

/* 4. Write code in JS: 
Create a simple shopping cart program. The program should:
1) Prompt the user to enter the price of three items one by one.
2) Apply a discount based on the total cost:
3) If the total cost is greater than 50 TK, apply a 10% discount. If the total cost is greater than 100, apply a 20% discount. Use the formula: discountedCost = totalCost - (totalCost * discount)
4) Display the final cost after applying the discount.
*/
var prompt = require('prompt-sync')();
var item1 = Number(prompt("Enter the price of item 1: "));
var item2 = Number(prompt("Enter the price of item 2: "));
var item3 = Number(prompt("Enter the price of item 3: "));

var totalCost = item1 + item2 + item3;

var discount = 0;
if (totalCost > 100) {
    discount = 0.20;
} else if (totalCost > 50) {
    discount = 0.10; 
}
var discountedCost = totalCost - (totalCost * discount);
console.log("The final cost after applying the discount is: " + discountedCost + " TK");
