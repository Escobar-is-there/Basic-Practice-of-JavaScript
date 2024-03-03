// Question 1

/* 1. Write code in JS: 
Write a code that takes input for five numbers from the user using a loop. Check whether each number is even or odd and store the result (even/odd) in an array.
Finally, display the array outside of the loop. 
*/
var prompt = require('prompt-sync')();
var resultArray=[]
for (let i = 0; i < 5; i++) {
    var userinput= Number(prompt("Enter a Number: "));
    if (userinput%2==0) {
        resultArray.push("even")
    } else {
        resultArray.push("odd")  
    }
    }
console.log(resultArray)

// Question 2

/* 2. Write code in JS : We have a matrix:
[ [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9] ]
Write a code that will increase the value of each element in this matrix by 1.  Display both the original and increased matrix..
*/
var ar1=[[1,2,3],
            [4,5,6],
            [7,8,9]]
 console.log("Orginal matrix: " ,ar1)
 var ar2=[]
 var ar3=[]
 var ar4=[]
 var final=[]
 for(i=0;i<1;i++){
            for(j=0;j<3;j++){
                ar2.push(ar1[i][j]+1)
            }
            }
 for(i=1;i<2;i++){
            for(j=0;j<3;j++){
            ar3.push(ar1[i][j]+1)
            }
            }
for(i=2;i<3;i++){
            for(j=0;j<3;j++){
            ar4.push(ar1[i][j]+1)
            }
            }
final.push(ar2,ar3,ar4)
console.log("Increased matrix: " ,final)

//Question 3

/* 3. Write code in JS
mat = [
  [2, 7, 89, 6],
  [90, 45,3, 7],
  [78, 56, 4, 2]
]
Write a code that stores the elements of the above 2D array in a 1D array. Display the final 1D array. 

*/
var mat=[[2,7,89,6],
         [90,45,3,7],
         [78,56,4,2]]
console.log("Orginal matrix: " ,mat)
var oneDarray=[]
for(i=0;i<mat.length;i++){
    for(j=0;j<4;j++){
        console.log(mat[i][j]) 
oneDarray.push(mat[i][j])
}
}
console.log("1D matrix: " ,oneDarray)

//Question 4

/* 4. Run the below code in JS, write your output:
By using a loop, write a code that takes 5 numbers from the user. Display both the sorted and unsorted versions of the numbers.
*/
var prompt = require('prompt-sync')();
var Array=[]
for (let i = 0; i < 5; i++) {
    var userinput= Number(prompt("Enter a Number: "));
    Array.push(userinput)
}
console.log("Unsorted Number: ",Array)
console.log("Sorted Number: ",Array.sort())
