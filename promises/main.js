// new Promise(function(resolve ,reject){

// setTimeout(() => {
    
// console.log('promise run')
// resolve()
// }, 1000);

// }).then(()=>{
//     console.log('promise resolved')
// }).catch((error)=>{
// console.log('E:',error)
// }).finally(()=>{
//     console.log('promise cycle completed')
// })


// new Promise(function(resolve ,reject){

//     setTimeout(() => {
        
//     console.log('promise run')
//     reject( new Error('Error occured'))
//     }, 1000);
    
//     }).then(()=>{
//         console.log('promise resolved')
//     }).catch((error)=>{
//     console.log('E:',error.message)
//     }).finally(()=>{
//         console.log('promise cycle completed')
//     })
    


// const promiseEx=new Promise(function(resolve ,reject){

//     setTimeout(() => {
        
//     console.log('promise run')
//     resolve( {name:'Bhushan deshmukh',rich:true})
//     }, 1000);
    
//     })
    

//     async function promiseHandler() {
//         const response=await promiseEx;
    
//         console.log(response)
//     }

    // promiseHandler();


    // const promiseEx=new Promise(function(resolve ,reject){

    //     setTimeout(() => {
            
    //     console.log('promise run')
    //     reject( new Error('failed '))
    //     }, 1000);
        
    //     })
        
    
    //     async function promiseHandler() {
    //       try {
    //         const response=await promiseEx;
        
    //         console.log(response)
            
    //       } catch (error) {
    //         console.log(error.message)
    //       }
    //     }
    //     promiseHandler();



//     new Promise(function(resolve,reject){

// resolve({name:'bhushan',rich:true,happy:true})


//     }).then((data)=>{
//         console.log(data)
//         return data.name;
//     }).then((name)=>{
//         console.log(name)
//         return `my name is ${name}`
//     }).then((finalData)=>{
// console.log(finalData)
//     })








//     Basic Level (1-10)
// What is a Promise in JavaScript? Explain its three states.

// Create a Simple Promise – Write a Promise that resolves after 2 seconds.


// new Promise((resolve)=>{


//     setTimeout(() => {
//         resolve('resolved after 2S')
//     }, 2000);
// }).then((message)=>{
//     console.log(message)
// })

// Handle a Rejected Promise – Create a Promise that rejects and handle the rejection using .catch().

new Promise((resolve,reject)=>{

reject(new Error('promise rejected due to error occured'))

}).catch((error)=>{
    console.log(error.message)
})


// Promise Chaining – Chain multiple .then() handlers to manipulate data sequentially.

// Convert a Callback to a Promise – Convert setTimeout(callback, 2000) into a Promise-based function.

// Promise.resolve() and Promise.reject() – Demonstrate how they work with examples.

// Use .finally() – Write a function where .finally() is used after resolving or rejecting a Promise.

// Error Propagation in Promises – Show how an error in one .then() propagates to .catch().

// Create a Fetch Wrapper – Write a function fetchData(url) that returns a Promise using fetch().

// Promise Inside a Loop – Execute multiple Promises one after another using a loop.

// Intermediate Level (11-20)
// Promise.all() – Execute multiple Promises concurrently and return the results as an array.

// Promise.allSettled() – Demonstrate how it differs from Promise.all().

// Promise.race() – Implement a function where the fastest resolving Promise wins.

// Promise.any() – Show an example where the first successfully resolved Promise is returned.

// Retry a Failed Promise – Write a function that retries a failing Promise up to 3 times.

// Sequential Execution of Promises – Implement a function that executes Promises sequentially instead of concurrently.

// Parallel vs. Sequential Promises – Demonstrate when to use Promise.all() vs. chaining.

// Abort a Promise-Based Fetch Request – Use AbortController to cancel a fetch request.

// Throttle API Calls Using Promises – Implement a throttling mechanism for API calls.

// Chaining Multiple API Calls – Fetch user details, then fetch their posts using the first API's response.

// Advanced Level (21-30)
// Promise-based Polling Mechanism – Implement a polling function that checks API status every 3 seconds.

// Implement a Delay Function – Write a function delay(ms) that resolves after ms milliseconds.

// Timeout for a Promise – Reject a Promise if it takes longer than a given time.

// Batch Processing with Promises – Process an array of tasks in batches of 3 concurrently.

// Build Your Own Promise Class – Implement a basic MyPromise class mimicking JavaScript's Promise.

// Debounce Function with Promises – Implement a debounce function using Promises.

// Rate Limit API Requests – Limit the number of API calls per second using Promises.

// Deadlock Scenario in Promises – Create a deadlock situation with Promises and resolve it.

// Promise with Event Listeners – Convert an event listener into a Promise that resolves when the event occurs.

// Combine Promises with Async/Await – Convert a Promise chain into an async function using await.