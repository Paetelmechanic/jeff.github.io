// LOOPS! (Not the cereal variety)
/* Loops run specific code multiple times, each time with a slightly different value 
*  as per the modification made to it in the loop
*/
//1. For loops - great for iterating over index based data such as strings and
// arrays. We'd want to use it in this case.
var testArray = [1, 3, 5, 7, 11, 13, 17, 19];
for (var i = 0; i < testArray.length; i++) { // loops forward through array up to the
    //array's length
  console.log(testArray[i]); //prints the values of the array in sequential order
}

//If I wanted to loop forward a specific number of times, I merely change my
//stop condition
for (var i = 0; i < 4; i++){ //If I only want the first 4 elements in an array
    console.log(testArray[i]);
}

//1b. For loop backward
var testArray = [1, 3, 5, 7, 11, 13, 17, 19];
for (var i = testArray.length - 1; i > -1; i--) {
  console.log(testArray[i]);  //do a backflip! Err, a backward loop rather
}

//If I wanted to loop forward a specific number of times, I merely change my
//stop condition
for (var i = 0; i < 4; i++){ //If I only 
//want the first four elements in an array
    console.log(testArray[i]);
}

//2. While loops
//While loops are good(and bad) because unlike for loops, they can run an
//indefinite number of times. Whereas a for loop has a defined number of times it
//will run. The while loop will run until a condition is no longer true. If the
//condition is never true, it wont even start.

var i = 10; //variable initialized to a value of 10
while (i < 19) { //loop will run so long as i is less than 19
     console.log("Power level rising to " + i); i++; //loop increments upward
//Its important to remember to increment or decrement your while loop upward
//or downward. If you do not, you will end up with an infinite loop because your
//loop will never reach a stop condition. Bad.
}
//3. For-in loops
// For in loops are designed to iterate over keys in an object, hence the var key in obj format :)
var obj = { //rando object with some world capitals
    USA: "Washington DC",
    Brasil: "Brasilia",
    France: "Paris",
    Japan: "Tokyo"
};
for (var key in obj) { //loop iterates through all keys in obj
    console.log(obj[key]); //expected output is all the values of the keys in the object
}













