/*
creating a faulty calculator using javascript
this faulty calculator does following 
1. it takes two no. as input from user
2. it performs wrong operations as follows :

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of it times

*/


//                                   solution


let random = Math.random()
console.log(random)
let a = prompt("Enter 1st No.")
let b = prompt("Enter Operations")
let c = prompt("Enter 2nd No.")

          //   perform operations
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if (random > 0.1){
         // perform right calculation
         console.log(`The Result is ${a} ${b} ${c} `)
     alert(`The Result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
        // perform wrong calculation
        b = obj[b]
     alert (`The Result is ${eval(`${a} ${b} ${c}`)}`)

}