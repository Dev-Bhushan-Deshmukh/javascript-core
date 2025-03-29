let name={
fname:'bhushan',
lname:'deshmukh'

}
let printFullName=function(){

console.log(`${this.fname}-${this.lname}`);

}

let callFunc=printFullName.bind(name);
console.log({}());
callFunc();