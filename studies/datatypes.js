/* 
* DATA TYPES:
*  
* 0. Data types are how Javascript stores, evaluates, and differentiates data. Without 
* data tyes, computers would not be able to logically work with or interpret the data 
* they are presented with.
*
*/
// 1. Number
var x = 9; // x is assigned a numerical value of 9

// 2. String
var string = "Ball of yarn"; // x is assigned the value of a group of characters "Ball
// of yarn."

// 3. Boolean
var pickles = true; // pickles has been assigned a binary true/false value of true

// 4. Array
var pets = ["dogs", "cats", "lemmings"]; // pets creates an array of rando pet creatures

// 5. Object
var puppy = {
    name: "Loki",
    cuteness: "Over 9000"
}; // puppy creates an object with a name, Loki, and a cuteness level over 9000. Marvelous.

// 6. Function
function multiply (num1, num2) { //Functions resuse code and perform complex actions
    return num1 * num2; // Here, this function simply returns a multiplied value
    //console.log(multiply()); //Originally logged to console after having returned the function. 
    //Thats a nono. Log to the console outside of the function or before returning the function.
}
console.log(multiply(6,10));

// 7. Undefined
var huh;
console.log(huh); // Logs undefined because variable is declared but never initialized

// 8. Null
var sandwich = "hero" // sandwich has been initialized to hero
var sandwich = null // sandwich is no longer hero, but now null though its still a type of object

// 9. NaN
// Stands for Not a Number. Its generally returned when the math doesnt add up
isNaN === isNaN; // returns false because NaN is not a number and cannot be compared to itself
// Originally had NaN === NaN, but equality operator (== and ===) cannot be used to test a value against NaN. Use isNaN instead.

// 10. Infinity and -Infinity
// functins in JS in much the same way as it would mathematically
console.log(Infinity * 8); // prints Infinity to the console because 8 times Infinity is Infinity
// negative infinity functions the same way but in reverse

// 11. Simple vs. Complex data types
/* Simple data types are atomic and immutable. Their values may be directly copied.
*  Complex data types conversely are dynamic, mutable, and they are copied by reference
*  as their potential outputs could be infinite in size
*/
// Simple
var number = 8;
number = 9;
console.log(number); // prints 9 to the console because the simple data type has been copied

// Complex
var testArray = ["dogs", 9, true, Infinity] /* this array is complex. It has no upper limit
*  to the amount of data it could contain, and it is mutable.
*/

// 12. Copy by Value vs. Copy by Reference
/* As alluded to before, simple data types are copied by value whereas complex ones are copied by 
*  reference. Complex data types are often too large to be directly stored in memory so their
*  value is evaluated at run time using references.
*/
var number = 8; // Lets look at a previous example
number = 9;
console.log(number); // prints 9 to the console because the simple data type's value has been copied

var testArray = ["All the things", 42];
var testArray2 = testArray;
console.log(testArray2); /* prints "All the things" and 42 to the console. It didn't copy the the values
*  the array, but rather pointed itself back to the original testArray.
*  If testArray2 is manipulated then it will also modify testArray because its copy by reference,
*  modifying the object that both variables point to.
*/
