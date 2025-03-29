setTimeout(() => console.log(2), 0); 

Promise.resolve().then(() => console.log(3));

console.log(4);
//  --------------
console.log('A');

setTimeout(() => console.log('B'), 1000);

setTimeout(() => console.log('C'), 0);

console.log('D');
// ----------------
console.log('X');

setTimeout(() => {
  console.log('Y');
  Promise.resolve().then(() => console.log('Z'));
}, 0);

console.log('W');
// -----------------
console.log(10);

setTimeout(() => console.log(20), 0);

Promise.resolve().then(() => {
  console.log(30);
  setTimeout(() => console.log(40), 0);
});

console.log(50);
// --------------------
console.log(1);

setTimeout(() => console.log(2), 100);

setTimeout(() => console.log(3), 0);

new Promise((resolve) => {
  console.log(4);
  resolve();
}).then(() => console.log(5));

console.log(6);
// ------------------
console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  return Promise.resolve();
}).then(() => console.log('Promise 2'));

setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');

// ----------------------
console.log(100);

setTimeout(() => console.log(200), 0);

Promise.resolve().then(() => {
  console.log(300);
  setTimeout(() => console.log(400), 0);
});

console.log(500);
// ------------------------
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => {
  console.log('C');
  return Promise.resolve();
}).then(() => console.log('D'));

setTimeout(() => console.log('E'), 0);

console.log('F');
// --------------------------
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => {
  console.log(3);
  setTimeout(() => console.log(4), 0);
});

Promise.resolve().then(() => console.log(5));

console.log(6);
// ---------------------
console.log('X');

setTimeout(() => console.log('Y'), 0);

Promise.resolve().then(() => {
  console.log('Z');
  return Promise.resolve();
}).then(() => console.log('W'));

setTimeout(() => console.log('V'), 0);

console.log('U');
// ------------------
console.log(10);

setTimeout(() => console.log(20), 0);

Promise.resolve().then(() => {
  console.log(30);
  setTimeout(() => console.log(40), 0);
});

Promise.resolve().then(() => console.log(50));

console.log(60);
// -------------------------
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => {
  console.log('C');
  return Promise.resolve();
}).then(() => console.log('D'));

Promise.resolve().then(() => console.log('E'));

setTimeout(() => console.log('F'), 0);

console.log('G');
// -----------------------------
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => {
  console.log(3);
  setTimeout(() => console.log(4), 0);
});

Promise.resolve().then(() => console.log(5));

console.log(6);
// ----------------------
console.log('X');

setTimeout(() => console.log('Y'), 0);

Promise.resolve().then(() => {
  console.log('Z');
  return Promise.resolve();
}).then(() => console.log('W'));

setTimeout(() => console.log('V'), 0);

console.log('U');
// ------------------
console.log(100);

setTimeout(() => console.log(200), 0);

Promise.resolve().then(() => {
  console.log(300);
  setTimeout(() => console.log(400), 0);
});

Promise.resolve().then(() => console.log(500));

console.log(600);
// --------------------
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => {
  console.log('C');
  return Promise.resolve();
}).then(() => console.log('D'));

Promise.resolve().then(() => console.log('E'));

setTimeout(() => console.log('F'), 0);

console.log('G');
// ---------------------
console.log(1);

setTimeout(() => console.log(2), 100);

setTimeout(() => console.log(3), 0);

Promise.resolve().then(() => console.log(4));

console.log(5);
// ----------------------
console.log('X');

setTimeout(() => console.log('Y'), 50);

Promise.resolve().then(() => {
  console.log('Z');
  setTimeout(() => console.log('W'), 0);
});

console.log('U');
// -------
console.log(10);

setTimeout(() => console.log(20), 0);

Promise.resolve().then(() => {
  console.log(30);
  return Promise.resolve();
}).then(() => console.log(40));

console.log(50);
// ------------------------
console.log('A');

setTimeout(() => console.log('B'), 100);

Promise.resolve().then(() => {
  console.log('C');
  return Promise.resolve();
}).then(() => console.log('D'));

Promise.resolve().then(() => console.log('E'));

setTimeout(() => console.log('F'), 50);

console.log('G');
// --------------------
console.log('X');

setTimeout(() => {
  console.log('Y');
}, 100);

Promise.resolve().then(() => {
  console.log('Z');
  setTimeout(() => console.log('W'), 50);
});

queueMicrotask(() => console.log('V'));

console.log('U');
// ----------------
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => {
  console.log('C');
  setTimeout(() => console.log('D'), 50);
});

queueMicrotask(() => console.log('E'));

setTimeout(() => console.log('F'), 100);

console.log('G');
// ------------------
console.log('1');

setTimeout(() => console.log('2'), 50);

Promise.resolve().then(() => {
  console.log('3');
  setTimeout(() => console.log('4'), 0);
});

queueMicrotask(() => console.log('5'));

setTimeout(() => console.log('6'), 100);

console.log('7');
// ----------
console.log('A');

setTimeout(() => console.log('B'), 10);

Promise.resolve().then(() => {
  console.log('C');
  queueMicrotask(() => console.log('D'));
  setTimeout(() => console.log('E'), 0);
});

queueMicrotask(() => console.log('F'));

setTimeout(() => console.log('G'), 5);

console.log('H');
// ------------
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => {
  console.log(3);
  queueMicrotask(() => console.log(4));
  setTimeout(() => console.log(5), 0);
});

queueMicrotask(() => console.log(6));

console.log(7);
// -----------------------
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => {
  console.log('C');
  queueMicrotask(() => console.log('D'));
  setTimeout(() => console.log('E'), 0);
});

queueMicrotask(() => console.log('F'));

setTimeout(() => console.log('G'), 10);

console.log('H');
// ---------------------------
console.log('X');

setTimeout(() => console.log('Y'), 0);

Promise.resolve().then(() => {
  console.log('Z');
  queueMicrotask(() => console.log('W'));
  setTimeout(() => console.log('V'), 0);
});

queueMicrotask(() => console.log('U'));

setTimeout(() => console.log('T'), 10);

console.log('S');
// --------------------
console.log('A');

setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => console.log('C'));
}, 0);

Promise.resolve().then(() => {
  console.log('D');
  setTimeout(() => console.log('E'), 0);
});

queueMicrotask(() => console.log('F'));

console.log('G');
