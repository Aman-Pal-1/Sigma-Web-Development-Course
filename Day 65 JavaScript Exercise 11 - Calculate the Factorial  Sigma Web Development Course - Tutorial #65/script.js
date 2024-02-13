// console.log("JavaScript Exercise 11 - Calculate the Factorial | Sigma Web Development Course - Tutorial #65")
// alert("JavaScript Exercise 11 - Calculate the Factorial | Sigma Web Development Course - Tutorial #65")



/*
Write a program to calculate factorial of a number using reduce and using for loops


6! = 6*5*4*3*2*1

*/


let a = 1;
for (i = 1; i <= 10; i++) {
    a = a * i
}
console.log(a);



let arr = [6, 5, 4, 3, 2, 1];
let fact = arr.reduce((a, b) => {
    return a * b
});
console.log(fact);