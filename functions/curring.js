function price(amount){

return function(discount){
    console.log(amount-discount)
}

}



const calculate=price(100);
calculate(20);
calculate(50);
const calculateTwo=price(200);
calculateTwo(20);
calculateTwo(50);