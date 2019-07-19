// OPERATORS
/* Operators are symbols that act on our data. They do things like assigning values, comparing
*  data, and arithmetic functions.
*/
//1. Assignment Operators
// As they name would imply, they simply assign a value
var name = "Jeff"; // here the = sign is assigning name the value of Jeff

//2. Arithmetic Operators
// The +,-,*, %, / operators do much the same thing they would do in normal arithmetic
// As an aside, the + operator can also be used to concatenate 
console.log("Loki" + " is a beast!"); // prints the two strings together

//3. Comparison Operators
// The >,<, ===, and == operators are used to compare values and they produce a boolean
9 > 4; // This simple code returns true, because 9 IS greater than 4
"dogs" === "cats"; // Returns false because the string dogs is not the same as the string cats

//4. Logical Operators
// Logical operators are used for condition statements when certain conditions must be met
// With && operators, all conditions must be met. With || operators, one or another condition
// must be met before it returns true
var a = 3;
var b = 5;

console.log(a > b && b > 0); //expected return false because only one condition is met
console.log(a > b && b > 0); //expected return true because one condition IS met

//5. Unary Operators
// Unary operator ! (bang operator) produces a negation. Typeof returns the data type
9 != 7; //expected return true because 9 is NOT equal to 7
console.log(typeof "Loki"); //expected return string

//6. Ternary Operators
// The ternary operator is a bit different. Whereas other operators take 1 or 2 operands, the 
// ternary operator takes 3. Greedy!
var puppy = "Loki";
var pug = "Not Loki";
var cuteness = (puppy === pug) ? "ugly dog" :"handsome pooch";
console.log(cuteness); //expected return 'handsome pooch' because puppy did NOT meet the condition
// of being a pug
