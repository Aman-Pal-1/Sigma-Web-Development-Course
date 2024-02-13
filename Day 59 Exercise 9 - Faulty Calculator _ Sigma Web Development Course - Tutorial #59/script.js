/*
creating a faulty calculator using javascript
this faulty calculator does following 
1. It takes two no. as input from user
2. It performs wrong operations as follows :

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of it times

*/


let random = Math.random();
console.log(random)

//                    Input Number


let a = prompt("Give me 1st number :");
let c = prompt("Enter operation")
let b = prompt("Give me 2nd number :");


//                 Random Number

let obj = {

    "+" : "-",

    "*" : "+",

    "/" : "**", 
    
    "-" : "/" ,
    
}

//                Condition


if (random > 0.1){
    console.log("Addition Calculation : ",a-b);
    alert("The Add Result is : ",subtraction);
    console.log("Subtraction Calculation : ", a/b);
    alert("The Subt Result is : ",a/b);
    console.log("Multiplication Calculation : ", a+b);
    alert("The Multiply Result is : ",a+b);
    console.log("Division Calculation : ",a**b);
    alert("The Divide Result is : ",a**b);
    console.log("Exponentiation Calculation :",a*b);
    alert("The Expo Result is : ",a*b);
}
  
else{
    console.log("Addition Calculation : ",a+b);
    console.log("Subtraction Calculation : ", a-b);
    console.log("Multiplication Calculation : ", a*b);
    console.log("Division Calculation : ",a/b);
    console.log("Exponentiation Calculation :",a**b);
}