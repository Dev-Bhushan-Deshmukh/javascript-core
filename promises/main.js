// *! prmise.all()
//* takes array of multiple promises
//* [result1,result2,result3]
//* it will return result combinely ,when all promises finish execution
//* if any of the promise fails-as soon as any of promise fails it will throw the error thrown by failed promise.
//* promises are cancelable .
let promise1=new Promise((resolve,reject)=>{
resolve('resolved-1');

})

let promise2=new Promise((resolve,reject)=>{
    reject('reject-2');
    
    })
    
let promise3=new Promise((resolve,reject)=>{
    resolve('resolved-3');
    
    })
promise1.then(data=>console.log(data))
//*! promise.allSettled([])
//* [result1,result2,result3]
//* it will return result combinely ,when all promises finish execution
//* wheather any of api fails or not it will return  promise result (even the failed promise error).
// *!promise.race([])