//Question 1

/* 1. Write code in JS: Declare two variables, then assign your first name and last name. Finally, print your full name including one space between both names.
*/
var firstName = "Rafiqul Alam"
var lastName = "Imtiaj"
var Fullname = firstName + " " + lastName
console.log(Fullname)

//Question 2

/* 2. Write code in JS: Suppose a = 5, b = "60". Use type conversion and print the sum of the two variables.
*/
var a = 5
var b = "60"
console.log(a + Number(b))

//Question 3

/* 3. Write code in JS: Num1 = 59, txt1 = "hello JS". Compare both variables and print the result.
*/
var Num1 = 59
var txt1 = "hello JS"
console.log("The type of Num1 is:" ,typeof(Num1))
console.log("The type of txt1 is:" ,typeof(txt1))
console.log(Num1 !== txt1)

//Question 4

/* 4. Write code in JS: Num2 = 344, txtNum = "344". Compare the value of both variables along with the data type and print the result.
*/
var Num2 = 344
var txtNum = "344"
console.log("The type of Num1 is:" ,typeof(Num2))
console.log("The type of txt1 is:" ,typeof(txtNum))
console.log(Num2 == txtNum)
console.log(Num2 === txtNum)
console.log(Num2 !== txtNum)

//Question 5

/* 5. Run the below code in JS, write your output:
*/
var oddNum = 75;
var evenNum = 90;
var boolValue = oddNum !== evenNum;
console.log(boolValue);
