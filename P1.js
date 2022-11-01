/*
Array:----
To store a multiple items in single variable then  we use array. 
Collection of similar elements or collectons of homogenious element.
Key with value is called Associative array.
JSON---Javascript object notation.

1D Array:---An array which have only one subscript is called 1D Array. 1D stands for one
dimensional array.
1D Array----
1. Using Subscript
2. Identing
3. Runtime

1. [][Using subscript]
2. Using Array constructor (new Array())

Array only has One property which is called length
Length:- It returns number of elements present in your array.
*/
//Note:- Array index always start from Zero index.
//Traversing means fetching element or display  element
var emp=[1,2,3,4,5,12]
console.log("Total no of elements present in your array is",emp.length)
console.log("Value is",emp[1])
var i 
console.log("Elements are:-----")
for(i=0;i<emp.length;i++)
{
    console.log(emp[i])
}
console.log(Array.isArray(emp))  // To check wether emp is array or not if it retuns true that 
//means it is array if false its not array
