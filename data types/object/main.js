// Basic Level (1-10)
// Create an Object – Create an object representing a person with properties like name, age, and city.



// const obj={
// name:'Bhushan',
// age:27,
// city:'Pune'

// }



// console.log(obj);



// Access and Modify Properties – Given an object, update an existing property and add a new property.

// const obj={
//     name:'Bhushan',
//     netWorth:'10 billion doller'

// }

// obj.netWorth='20 billion doller'

// obj.ultraRich=true;

// console.log(obj)

// Check if a Key Exists in an Object – Implement a function to check if a given key exists in an object.

// function checkKey (keyItem)
// {

// console.log(obj[keyItem]?`key exist--${keyItem}---${obj[keyItem]}`:'key doesn"t exist');


// }

// const obj={

//     name:'Bhushan'
// }

// checkKey('name');
// checkKey('age');

// Iterate Over Object Properties – Use for...in loop and Object.keys() to iterate through an object.
// const obj={
//     name:'bhushan',
//     age:28,
//     bGroup:'O+',
//     DOB:'12-09-1997'
// }


// for(let i in obj){
//     console.log(`${i}:${obj[i]}`);
// }

// for(let i of Object.keys(obj)){
//     console.log(`${i}:${obj[i]}`);
// }

// Delete a Property from an Object – Remove a specific property from an object.


// const obj={
//         name:'bhushan',
//         age:28,
//         bGroup:'O+',
//         DOB:'12-09-1997'
//     }
    

    
// 



// Clone an Object – Create a deep copy of an object without modifying the original.

// const obj={
//     name:'bhushan',
//     age:28,
//     bGroup:'O+',
//     DOB:'12-09-1997'
// }


// const newObj={...obj};
// newObj.city='Goa'
// console.log(newObj,obj);






// Merge Two Objects – Merge two objects without modifying the originals.


// const obj={
//     name:'bhushan',
//     age:28,
//     bGroup:'O+',
//     DOB:'12-09-1997'
// }
// const newObj={
//    class:'buisness'
// }

// const clean=Object.assign(obj,newObj);
// console.log(clean)



// const cleanObj={...obj,...newObj};
// console.log(cleanObj)


// Freeze an Object – Prevent modification of an object using Object.freeze().



// const obj={
//     name:'bhushan'


// }

// Object.freeze(obj,'name');
// obj.name='BVD';
// console.log(obj)

// Convert an Object to an Array – Convert an object’s keys and values into an array format.

// const obj={
//         name:'bhushan',
//         age:28,
//         bGroup:'O+',
//         DOB:'12-09-1997'
//     }


//     console.log(Object.entries(obj))

// Find the Size of an Object – Count the number of key-value pairs in an object.


// console.log(Object.keys(obj).length);

// Intermediate Level (11-20)
// Sort an Array of Objects – Sort an array of objects by a specific property (e.g., age).

// const arr=[{age:30},{age:50},{age:2},{age:25},{age:23}]
// const arr=[1,2,3,6,5,7,9,5];
// console.log(arr.sort((item,item2) =>item2.age-item.age));
// console.log(arr.sort((item,item2) =>item.age-item2.age));





// Filter an Array of Objects – Find all objects that match a given condition.

// const arr=[{age:30},{age:50},{age:2},{age:25},{age:23}];

// console.log(arr.filter((item)=>item.age>25))





// Find an Object in an Array – Search for an object based on a specific property value.

// const arr=[{age:30},{age:50},{age:2},{age:25},{age:23}];

// console.log(arr.find((item)=>item.age==30))



// Flatten a Nested Object – Convert a deeply nested object into a flat object with dot notation keys.

// Unflatten an Object – Convert a flat object back into a nested object.

// Compare Two Objects – Check if two objects are deeply equal.

// Find Duplicates in an Array of Objects – Identify duplicate objects based on a specific property.

// const arr=[{no:1,age:30},{no:2,age:50},{no:3,age:2},{no:4,age:25},{no:5,age:23},{no:6,age:23},{no:7,age:2}];
// for(let i=0; i<arr.length; i++){


// for(let j=i+1 ;j<arr.length; j++){
// if(arr[i].age==arr[j].age){
//     console.log(`duplicate found ${JSON.stringify(arr[i])} and ${JSON.stringify(arr[j])} are equal` )
// }

// }

// }

// Group Objects by a Property – Group an array of objects based on a property value.

// Convert an Array of Objects to a Single Object – Transform an array of objects into a single object using a unique key.

// Remove Falsy Values from an Object – Remove properties with falsy values (null, undefined, 0, false, '').

// Advanced Level (21-30)
// Create an Object Without a Prototype – Use Object.create(null) and explain its use case.

// Implement a Custom bind Function – Create a polyfill for Function.prototype.bind().

// Implement a Custom call Function – Implement Function.prototype.call() manually.

// Implement a Custom apply Function – Implement Function.prototype.apply() manually.

// Deep Clone an Object – Implement a function to deeply clone an object without using JSON.stringify().

// Check if an Object is Empty – Write a function to check if an object has no properties.

// const obj={
//     a:'a',
//     b:'b'
// }

// function checkEmpty(ob){
//     if(Object.keys(ob).length==0){
//         console.log('no props')
//     }
//     else{
//         console.log('props present')
//     }
// }

// checkEmpty(obj);


// Convert an Object into Query Parameters – Convert an object into a URL query string.

// Parse a Query String into an Object – Convert a URL query string into an object.

// Implement a LRU Cache Using Objects – Create a Least Recently Used (LRU) Cache using JavaScript objects.

// Create an Immutable Object – Implement an immutable object where modifications create a new object instead of modifying the existing one.

//group by property

// let  employees = [
//     { name: "John Doe", role: "Developer", department: "Engineering" },
//     { name: "Jane Smith", role: "Designer", department: "Creative" },
//     { name: "John Doe", role: "Team Lead", department: "Engineering" },
//     { name: "Emily Johnson", role: "Developer", department: "Engineering" },
//     { name: "Michael Brown", role: "Support", department: "Customer Service" },
//     { name: "Jane Smith", role: "Senior Designer", department: "Creative" },
//     { name: "Chris Davis", role: "HR Manager", department: "Human Resources" },
//     { name: "John Doe", role: "Project Manager", department: "Operations" },
//     { name: "Emily Johnson", role: "QA Engineer", department: "Quality Assurance" },
//     { name: "Michael Brown", role: "Sales Executive", department: "Sales" },
//   ];
  
  
//   let groupedObj={};
  
//   for(let i of employees)
//   {

//       if(!groupedObj.hasOwnProperty(i.name)){
         
//           groupedObj[i.name]=[i.role]
          
//       }
//       else{
//             groupedObj[i.name]= [...groupedObj[i.name],...[i.role]]
//       }
     
      
//   }
//   console.log(groupedObj)