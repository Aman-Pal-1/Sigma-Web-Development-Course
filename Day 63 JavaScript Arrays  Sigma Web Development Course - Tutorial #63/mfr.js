let a = [23,24,25,26,27,28,29,30];
// let new_a = [];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     new_a.push(element**2)
// };
// let new_a = a.map((e,index,arr)=>{
//     return e**2
// })
// console.log(new_a);

// const greaterthensevenhundred = (e)=>{
//     if (e>700){
//         return true
//     }
//     return false
// }
// console.log(new_a.filter(greaterthensevenhundred));

let arr2 = [2,3,4,5];
const redu = (a,b)=>{
    return a+b
}
console.log(arr2.reduce(redu))

let w = Array.from("aman pal")
console.log(w)