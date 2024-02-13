let arr = [1,2,3,5,6,8,9];
// index   0,1,2,3,4,5,6
arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

console.log(arr .toString())
console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr.push(100))
console.log(arr)
console.log(arr.push("aman"))
console.log(arr.shift())
console.log( arr.unshift("gagan"))
console.log(arr)
delete arr[3]


let a = [1,2,3,4]
let b = [0,9,8,7]
let c = [6,5,4,3]
let d = a.concat(b,c)
console.log(d)
b.sort()
b.splice(2,1,23,24)
console.log(a.reverse(2))
console.log(b)
console.log(c.slice(1,3))
console.log(c)