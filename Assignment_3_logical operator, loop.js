//Question 1

/* 1. Write code in JS: 
Write a code for javascript that takes two numbers, the first and last numbers of a series, as input from the user.
The program should then calculate and display the sum of all the numbers in that series. 
For example: If the user inputs 3 and 8, the program should calculate and print the sum: 3 + 4 + 5 + 6 + 7 + 8. 
If the user inputs 1 and 10, the program should calculate and print the sum: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.
*/
var prompt = require('prompt-sync')();
var firstnumber = Number(prompt("Enter The First Number of Your Series "))
var lastnumber = Number(prompt("Enter The Last Number of Your Series "))
var i = firstnumber
var sum = 0
for (let i = firstnumber; i <=lastnumber; i++) {
    sum = sum + i;
    console.log(i);
}
console.log("The Sum of The Series : ",sum )

//Question 2

/* 2. Write code in JS : Write a code to calculate and display the sum of all even numbers between 1 and 500.
*/
var sum = 0
for (var i = 1; i <= 500; i++) {
        if (i%2===0) {
            console.log(i) 
            sum = sum + i; 
    }  
}
console.log("The Sum of all even number Between 1 and 500 is : ",sum )

//Question 3

/* 3. Write code in JS : Write a code to calculate and display the sum of all odd numbers between 1 and 500.
*/
var sum = 0
for (var i = 1; i <= 500; i++) {
        if (i%2!==0) {
            console.log(i) 
            sum = sum + i; 
    }  
}
console.log("The Sum of all Odd number Between 1 and 500 is : ",sum )

//Question 4

/* 4. Run the below code in JS, write your output:
Suppose we have a series: 3+8+13+........  

- Find the 100th term of this series. The code will display the value of the 100th term of this series. You can use the formula: nth_term = a + (n-1) d 

- Display the sum of the series up to the 100th term.
*/
var a = 3
var d = 5
var n = 100
var nth_term = a+(n-1)*d
console.log("The n_th Term of series : ",nth_term)
var sum = n/2*(2*a+(n-1)*d)
console.log("The Sum of The Series up to 100th Term is : ",sum)
