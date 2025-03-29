// ?methods of date

// *! Date 
// ** create date object 
// console.log(new Date());
//** readable string
// console.log(new Date().toString());
// ** type of date object 
// console.log(typeof new Date());
// **
// console.log(new Date().toLocaleString())
//** */
// console.log(new Date().toDateString())
//** */
// console.log(new Date().toLocaleDateString())

//** */
// let myDate=new Date(2023,1,3); 
// let myDate=new Date(2023,0,3); 

// console.log(myDate.toDateString());

//*
// let myDate=new Date(2023,1,3,5,4,33); 

// console.log(myDate.toLocaleString());

//*

// let myDate=new Date('2023-11-29'); 

// console.log(myDate.toLocaleString());

//*

// let myDate=new Date('2023-11-29 23:59:59:999')

// console.log(myDate.toLocaleString());
//*
// let myDate=new Date('11-30-2025'); 

// console.log(myDate.toLocaleString());
// let myDate=new Date('30-01-2025'); 

// console.log(myDate.toLocaleString());
//*
// let tstamp=Date.now(); 

// console.log(tstamp);

// let date=new Date().getTime()
// console.log(date);
// let date=Math.floor(new Date().getTime()/1000);
// console.log(date);
//*
// console.log(new Date().getMonth()+1);
// console.log(new Date().getDay());
//* 
// console.log(new Date().toLocaleString('default',{
//     weekday:'long',
//     timeZone:''
// }))

//* compare dates
let startDate=new Date(2024,10,12);
console.log(startDate.toDateString())
let currentDate=new Date();
console.log(currentDate.toDateString())

let diffTime=Math.abs(startDate.getTime()-currentDate.getTime());
let diffDays=Math.ceil(diffTime/(1000*60*60*24));
console.log(diffDays);