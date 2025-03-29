//*firstclass ciitizen

// *! Function Declaration
// function greet(name) {
//     return `Hello, ${name}`;
// }

// function myFunc(name){

// this.username=name;
// console.log(this.username)
// return  this.username;
// }
// let res=myFunc('bhushan')

// console.log(res)

// *! Function Expression
// const greet = function(name) {
//     return `Hello, ${name}`;
// };


// const myfunc=function(name='bhushan'){

// return this.salary=50000;

// }

// let res=myfunc('bhushan deshmukh');
// console.log(res);

// *! Anonymous Function
// setTimeout(function() {
//     console.log("This is an anonymous function!");
// }, 1000);

// *! Arrow Function
// const greet = (name) => `Hello, ${name}`;


// const myArrowFunc=()=>{

// return `Bhushan's salary is ${50000} per month`

// }
// let res=myArrowFunc()
// console.log(res)

// *! Immediately Invoked Function Expression (IIFE)
// (function() {
//     console.log("I run immediately!");
// })();


// (function(){

// console.log('this is imediatly invoked function');

// function innerIffe(){
// console.log('inner iife called')
// }
// innerIffe();
// (function(){
//     console.log('second func of iife');
// })()
// })();


// *! Higher-Order Function
// const higherOrder = (fn) => fn(5);
// const add = (x) => x + 10;
// console.log(higherOrder(add)); // Output: 15

// *! Callback Function
// function process(callback) {
//     callback("Data processed");
// }
// process((message) => console.log(message));

// *! Recursive Function
// function factorial(n) {
//     return n === 0 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(5)); // Output: 120

// *! Generator Function
// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const gen = generateNumbers();
// console.log(gen.next().value); // Output: 1

// *! Async Function
// async function fetchData() {
//     const response = await fetch("https://api.example.com");
//     return response.json();
// }

// *! Constructor Function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const john = new Person("John", 30);

// *! Pure Function
// function add(a, b) {
//     return a + b;
// }

// *! Impure Function
// let count = 0;
// function increment() {
//     count++;
//     return count;
// }

// *! Static Method
// class MathUtil {
//     static square(x) {
//         return x * x;
//     }
// }
// console.log(MathUtil.square(5)); // Output: 25

// *! Closures
// function createCounter() {
//     let count = 0;
//     return function() {
//         return ++count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); // Output: 1

// *! Currying Function
// const add = (a) => (b) => a + b;
// console.log(add(5)(3)); // Output: 8

function curryingParent(arg1){

    return function CurryingChild(arg2){
        return arg1 +arg2;
    }
}
let curr=curryingParent(12);
let curr2=curr(5);

console.log(curr2)
console.log(curryingParent(12)(2))


// *! Debounced Function
// const debounce = (func, delay) => {
//     let timeout;
//     return (...args) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func(...args), delay);
//     };
// };

// *! Throttled Function
// const throttle = (func, limit) => {
//     let lastCall = 0;
//     return (...args) => {
//         const now = Date.now();
//         if (now - lastCall >= limit) {
//             lastCall = now;
//             func(...args);
//         }
//     };
// };

// *! Anonymous Async Function
// (async () => {
//     const data = await fetch("https://api.example.com");
//     console.log(data);
// })();

// *! Built-In Functions
// parseInt("42"); // Output: 42
// isNaN("NaN");   // Output: true
