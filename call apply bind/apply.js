let name={
    fname:'bhushan',
    lname:'deshmukh'
}
let fullName=function(){
    console.log(`${this.fname}-${this.lname}`);
}
let fullNameAndArgument=function(city='newYork',state='east Coast'){
    console.log(`${this.fname}-${this.lname}-${city}-${state}`);
}

fullName.apply(name);
fullNameAndArgument.apply(name,['boston','USA']);