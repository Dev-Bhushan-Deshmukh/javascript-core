// ? index starts with 0
//? splice method implementation.
//? time complexity=no.of lines
//?space complexity=size of program

// let data=[1,25,4,67,88,32,76,2,98];

// *! loop through array
// for(let i=0;i<data.length-1;i++)
// {
//     console.log(`data ${i} is ${data[i]}`)
// }
// *! accessing element

// console.log(data[data.length-1]);
// console.log(data[0]);
// // console.log(data[data.length<data.length-1 ?data.length :5]);
// let x='abc';
// console.log(typeof parseInt(x));
// *! Insert element in array.

// data[3]=90;
// console.log(data)

// *! add new element and shift value forward
// let arr=[1,2,3,4,5,6,7,8,9]
// let newElement=333;
// let position=2;

// for(let i=arr.length-1;i>=0;i--)
// {
// // console.log(arr[i])
// if(i>=position)
// {
// arr[i+1]=arr[i]
// if(i==position)
// {
//     arr[i]=newElement
// }

// }
// }
// console.log(arr)
// *! Remove  specified element from array
// let arr=[1,2,3,4,5,6,7,8,9];
// let position=2
// for(let i=position;i<arr.length-1;i++)
// {
//     if(i>=position)
//     {
// arr[i]=arr[i+1]
//     }


// }
// arr.length=arr.length-1
// console.log(arr)
// *! Search element in array
// * linear search
// let arr = [1, 2, 3, 4, 75, 3, 98, 21, 98, 98];
// let item = 98;
// let index = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//         index.push(i);

//     }
// }
// console.log(index)
// *! merge two arrays
//* for loop (2)
// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,10,11,12];
// let arr3=[];
// for(let i=0;i<arr1.length;i++)
// {
// arr3[i]=arr1[i]

// }

// for(let i=0;i<arr2.length;i++){
//     arr3[arr1.length+i]=arr2[i]
// }
// console.log(arr3)

// *! merge two arrays  (while loop)
// let arr1=[1,3,5,7,9,23,45,27];
// let arr2=[21,22,32,58];
// let arr3=[];
// let d1=0;
// let d2=0;
// let d3=0;
// while(d1<arr1.length && d2<arr2.length){
// if(arr1[d1]<arr2[d2])
// {
// arr3[d3]=arr1[d1];
// // d3++;
// d1++;
// }
// else{
// arr3[d3]=arr2[d2];
// // d3++;
// d2++;

// }
// d3++;

// }
// while(d2<arr2.length){
//     arr3[d3]=arr2[d2];
//     d3++;
//     d2++;
// }
// console.log(arr3);
//*! repeat each element in array (specified times)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [];
// let counter = 0;
// let iter = 3;
// for (let i = 0; i < arr.length; i++) {
//     arr2[counter] = arr[i];
//     arr2[++counter] = arr[i];
//     counter++;
// }
// console.log(arr2)

//*! array sorting
//* bubble sort
//* iterations=size x size
// arr=[34,2,44,2,55,43,21,44,21,23,1,5];
// for(i=0;i<arr.length;i++)
// {

//     for(j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]>arr[j])
//         {
// let temp=arr[i];
// arr[i]=arr[j];
// arr[j]=temp;

//         }
//     }
// }
// console.log(arr);
//*! selection sort
let arr=[120,4,3,22,56,98,1];

for(i=0;i<arr.length;i++)
{
    let smallest=i;
for(j=i+1;j<arr.length;j++)
{
if(arr[j]<arr[smallest])
{

smallest=j

}
}

let temp=arr[i];
arr[i]=arr[smallest];
arr[smallest]=temp;


}

console.log(arr)


