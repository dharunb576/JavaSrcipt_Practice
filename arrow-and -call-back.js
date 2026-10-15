
//Arrow function
// function bv(n)
// {
//     return n%2
// }

// let bv = (n) => n%2;

// console.log(bv(11))

//call back


let opera = (op,a,b) => op(a,b)

let add = (a,b) => a+b
let sub = (a,b) => a-b

console.log(opera(sub,7,5))
