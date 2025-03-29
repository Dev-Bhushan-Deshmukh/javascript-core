// function outer() {
//     let count = 0;
//     return function inner() {
//       count++;
//       console.log(count);
//     };
//   }
  
//   const fn1 = outer();
//   fn1();
//   fn1();
  
//   const fn2 = outer();
//   fn2();


//   function createCounter(start) {
//     return function () {
//       console.log(start++);
//     };
//   }
  
//   const counter1 = createCounter(5);
//   const counter2 = createCounter(10);
  
//   counter1();
//   counter1();
//   counter2();
//   counter1();
//   counter2();


//   function outer() {
//     let x = 10;
//     return function inner() {
//       console.log(x);
//       x++;
//     };
//   }
  
//   const fn = outer();
//   fn();
//   fn();
//   fn();


//   function counter() {
//     let count = 0;
//     return () => {
//       console.log(count);
//       count++;
//     };
//   }
  
//   const c1 = counter();
//   const c2 = counter();
  
//   c1();
//   c1();
//   c2();
//   c1();
//   c2();


//   function createAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   const add5 = createAdder(5);
//   const add10 = createAdder(10);
  
//   console.log(add5(3));
//   console.log(add10(3));

//   function counter() {
//     let count = 0;
//     return {
//       increment: function() {
//         count++;
//         console.log(count);
//       },
//       decrement: function() {
//         count--;
//         console.log(count);
//       }
//     };
//   }
  
//   const c = counter();
//   c.increment();  // 1
//   c.increment();  // 2
//   c.decrement();  // 1
//   c.increment();  // 2

//   function outer() {
//     let a = 5;
//     return function inner() {
//       console.log(a);
//       a++;
//     };
//   }
  
//   const fn = outer();
//   fn();
//   fn();
//   fn();

//   function createCounter() {
//     let count = 0;
//     return {
//       increment: () => console.log(++count),
//       decrement: () => console.log(--count),
//     };
//   }
  
//   const counter1 = createCounter();
//   const counter2 = createCounter();
  
//   counter1.increment();
//   counter1.increment();
//   counter2.increment();
//   counter1.decrement();

//   function outer() {
//     let x = 10;
//     return function inner() {
//       console.log(x);
//       x += 2;
//     };
//   }
  
//   const fn1 = outer();
//   const fn2 = outer();
  
//   fn1();
//   fn1();
//   fn2();
//   fn1();

//   function counter() {
//     let count = 0;
//     return function() {
//       console.log(count);
//       count++;
//     };
//   }
  
//   const c1 = counter();
//   const c2 = counter();
  
//   c1();
//   c1();
//   c2();
//   c1();
//   c2();

//   function createAdder(x) {
//     return function(y) {
//       console.log(x + y);
//     };
//   }
  
//   const add5 = createAdder(5);
//   const add10 = createAdder(10);
  
//   add5(3);
//   add10(3);
//   add5(7);
//   add10(2);


//   function makeCounter() {
//     let count = 0;
//     return {
//       increment: function() {
//         count++;
//         console.log(count);
//       },
//       decrement: function() {
//         count--;
//         console.log(count);
//       }
//     };
//   }
  
//   const counter1 = makeCounter();
//   const counter2 = makeCounter();
  
//   counter1.increment();
//   counter1.increment();
//   counter2.increment();
//   counter1.decrement();
//   counter2.increment();
  