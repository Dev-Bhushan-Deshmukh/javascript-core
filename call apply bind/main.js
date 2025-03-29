let name = {
  fname: "bhushan",
  lastname: "deshmukh",
  printFullName: function () {
    console.log(`${this.fname} ${this.lastname}`);
  },
};
// name.printFullName()

let name2={

    fname:'bhushan',
    lastname:'chavan',
}
// name.printFullName.call(name2);

let fullNameCapitalized=function(city,state='north Am'){

    console.log(`${this.fname}-${this.lastname}-${city}--${state}`)
}
// fullNameCapitalized.call(name2)
fullNameCapitalized.call(name2,'newyork','east coast');