// STRING MANIPULATION
/* Strings can be manipulated in Javascript through various means by accessing their properties
*  such as length, or accessing particular index values
*/
// Operators can be used to manipulate strings: for example, the + operator 
// can be used to concatenate two strings
console.log("23" + " is the goat"); //expected to print 23 is the goat, combining the 2 strings

//Strings also may be manipulated via their methods
var str = "Loki";
console.log(str.slice(2)); //expected return 'ki' since the string is cut at the second index

var str = "Loki";
console.log(str.length); //expected return 4 since the string is 4 characters long


var str = "Loki is a husky"; // Insert rando string here
var str2 = str.split(" "); // The string is split by its Space character into an array 
console.log(str2[3]) //expected return is 'husky', because it is at index 3 of the new array

var str = "benji";
console.log(str.toUpperCase()); //Entire string will be capped and read as BENJI

var str = "BENJI";
console.log(str.toLowerCase()); //Entire string will be lower case and read as benji

//Strings can also manipulated via their index like arrays.
console.log(str[0]);

//Strings can also be manipulated with operators
var dog = "Obviously" + "superior to cats" //Concatenates the two strings into a single string