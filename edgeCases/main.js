//*! 1. Reverse a String
// Edge cases:

// Empty string ""

// Single character "a"

// Unicode or emojis "😀🙃"

function ReverseString(string_){
    const nonStr=[null,undefined,false,true,0,''];
if(nonStr.includes(string_) || string_.length==1 || typeof(string_)!=='string'){
    throw Error('non string') 
}

return string_.split('').reverse().join('')

}
const ob=ReverseString('');
console.log(ob)


//*! 2. Check for Palindrome
// Edge cases:

// Case sensitivity ("RaceCar")

// Punctuation or spaces ("A man, a plan, a canal: Panama")

// Empty or single-char string

//*! 3. Sum of Array Elements
// Edge cases:

// Empty array []

// Array with negative numbers

// Non-numeric values mixed in

//*! 4. Find Duplicates in an Array
// Edge cases:

// No duplicates

// All elements are duplicates

// Array of different types: [1, "1", true, "true"]

//*! 5. Flatten a Nested Array
// Edge cases:

// Already flat array

// Deeply nested arrays ([1,[2,[3,[4]]]])

// Non-array elements

//*! 6. Deep Compare Two Objects
// Edge cases:

// Different keys

// Nested objects

// Objects with functions, arrays, or dates

//*! Implement a Debounce Function
// Edge cases:

// Rapid-fire events (e.g., 100+ calls in 1 sec)

// Delayed trigger not called

// Leading/trailing options

//*! Custom Array.prototype.map()
// Edge cases:

// Empty array

// undefined or null as callback

// Array holes: [1,,3]

//*!9. LRU Cache Implementation
// Edge cases:

// Cache capacity = 0

// Getting a non-existent key

// Repeated put on the same key

//*! 10. Throttle Function
// Edge cases:

// Very short or zero delay

// High-frequency triggers

// Test with async functions

