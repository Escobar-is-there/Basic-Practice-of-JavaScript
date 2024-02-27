// Question 1
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
var prompt = require('prompt-sync')();
var year = prompt("enter a year : ")
if (year%4==0) {
    console.log(year ,"is a leap year")
} else {
    console.log(year ,"is not a leap year")
}

// Question 3
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
