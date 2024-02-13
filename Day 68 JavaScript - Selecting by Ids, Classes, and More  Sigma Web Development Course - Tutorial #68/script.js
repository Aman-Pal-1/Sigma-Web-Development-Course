console.log( 'aman Pal')
// let box = document.getElementsByClassName("boxes")
// console.log (box)
//  box[2].style.backgroundColor = "red"
let box = document.getElementById("greenbox").style.backgroundColor = 'green';
console.log(box)

// document.querySelector('.boxes').style.backgroundColor = "yellow";

console.log(document.querySelectorAll('.boxes'))
document.querySelectorAll('.boxes').forEach(e=>{
    e.style.backgroundColor = 'gold'
});

console.log(document.getElementsByTagName("div"))
let e = document.getElementsByTagName("div")
console.log(e[3].matches("#greenbox"))
console.log(e[3].closest("#greenbox"))
console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))