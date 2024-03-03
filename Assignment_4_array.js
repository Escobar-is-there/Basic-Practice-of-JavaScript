// Question 1
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
var prompt = require('prompt-sync')();
var Array=[]
for (let i = 0; i < 5; i++) {
    var userinput= Number(prompt("Enter a Number: "));
    Array.push(userinput)
}
console.log("Unsorted Number: ",Array)
console.log("Sorted Number: ",Array.sort())
