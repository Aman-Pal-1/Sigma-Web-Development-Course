// console.log("JavaScript Functions");


function Nice(name) {
    console.log("Hey" + name + " You are Nice")
    console.log("Hey" + name + " You are Good")
    console.log("Hey" + name + " You are very intellegent")
    console.log("Hey" + name + " Your t-shirt is good")
};

Nice(" Gagan");
Nice(" Nainsi ");

// console.log("Hey Aman You are Nice");
// console.log("Hey Aman You are Nice");
// console.log("Hey Aman You are Nice");
// console.log("Hey Aman You are Nice");

function sum(a, b, c = 3) {
    // console.log(a + b)  
    return a+b+c
};
result=sum(3);
result1=sum(8,5,4);
result2=sum(15,5);
console.log("the sum of these no. is :", result);
console.log("the sum of these no. is :", result1);
console.log("the sum of these no. is :", result2);

const func1 = (x)=>{
    console.log("I am an arrow function.",x)
};
func1(35);
func1(56);
func1(78);
