//   Basic Level (1-10)
// Reverse an Array – Reverse the elements of an array in place.


// const arr=[1,2,3,4,5,6,7];

// console.log(arr.reverse());

// let newArr=[];
// for(let i=arr.length-1;i>=0; i--){
// newArr.push(arr[i]);

// }
// console.log(newArr)


// Find the Maximum and Minimum Element – Return the largest and smallest numbers in an array.
// const arr=[1,2,3,4,5,6,7];
// console.log(arr.sort().pop(), arr.sort().shift());


// Check for Duplicates – Determine if an array contains duplicate elements.

// const arr=[1,2,3,4,5,6,7,2];

// for(let i of arr){
    
//     if(arr.indexOf(i)!=arr.lastIndexOf(i)){
//         console.log(i,'duplicate')
//         break ;
//     }
  
// }






// Move Zeroes to End – Move all zeroes to the end while maintaining the order of non-zero elements.

// let arr=[10,4,0,34,0,22,8,3];

// for(let i of arr){
 
// if(i==0){
   
//   arr[arr.indexOf(i)]='x';

// }

// }
// console.log(arr)



// Find Second Largest Element – Find the second largest element without sorting.



// let arr=[90,1,3,4,6,8,22,5,8];
// let largest=arr[0];

// for(let i of arr){
// if(largest<arr[i+1]){
//     largest=arr[i+1]
// }

// }



// Find All Pairs with a Given Sum – Find all pairs whose sum is equal to a given target.

// Merge Two Sorted Arrays – Merge two sorted arrays without using extra space.

// Rotate an Array – Rotate an array k times to the right.

// Find the Missing Number – Given numbers from 1 to n with one missing, find the missing number.

// Find Union and Intersection of Two Arrays – Return both the union and intersection.

// let arr=[1,2,3,4,5];
// let arr2=[1,3,6];
// let intersection=[];
// let union=[];

// for(let i of arr){

// if(arr2.includes(i)){

// intersection.push(i);

// }
// else{
//     union.push(i);
// }
// }
// for(let i of arr2){
//     if(!intersection.includes(i))
//     {
//         union.push(i)
//     }
// }
// console.log(union,intersection)



//randomise array
const arr=[1,2,3,4,5,6,7,8,9];
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  
arr.forEach((item)=> console.log (getRandomIntInclusive(0,arr.length-1)))
// Sort an Array of 0s, 1s, and 2s – Sort an array containing only 0, 1, and 2 without using sorting algorithms.

// Subarray with Given Sum – Find a continuous subarray that adds up to a given sum.

// Largest Subarray with Zero Sum – Find the longest subarray with a sum of zero.

// Find the First Missing Positive Integer – Find the smallest missing positive integer in an unsorted array.

// Majority Element – Find the element that appears more than n/2 times.

// Trapping Rainwater – Given an array representing elevation heights, calculate the trapped water.

// Stock Buy and Sell – Find the best time to buy and sell to maximize profit.

// Find the kth Largest Element – Find the kth largest element in an array.

// Find Two Elements with Minimum Difference – Find a pair with the smallest absolute difference.

// Longest Consecutive Sequence – Find the length of the longest consecutive sequence in an unsorted array.



// Product of Array Except Self – Find the product of all elements except the current one, without using division.

// Three Sum Problem – Find all unique triplets that sum to zero.

// Subarray Sum Equals K – Find the number of continuous subarrays whose sum equals k.

// Smallest Subarray with Sum ≥ S – Find the smallest subarray with a sum greater than or equal to S.

// Count Inversions in an Array – Count how far an array is from being sorted.

// Rearrange Positive and Negative Numbers – Arrange elements such that positive and negative numbers appear alternatively.

// Find Duplicates in an Array – Identify duplicate elements when numbers are in the range [0, n-1].

// Median of Two Sorted Arrays – Find the median of two sorted arrays of different sizes.

// Maximum Sum Subarray (Kadane’s Algorithm) – Find the subarray with the maximum sum.

// Merge Overlapping Intervals – Given intervals, merge the overlapping ones.



