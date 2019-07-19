// LOOPS! (Not the cereal variety)
/* Loops run specific code multiple times, each time with a slightly different value 
*  as per the modification made to it in the loop
*/
//1. For loops
var testArray = [1, 3, 5, 7, 11, 13, 17, 19];
for (var i = 0; i < testArray.length; i++) { // loops forward through array up to the
    //array's length
  console.log(testArray[i]); //prints the values of the array in sequential order
}

//1b. For loop backward
var testArray = [1, 3, 5, 7, 11, 13, 17, 19];
for (var i = testArray.length - 1; i > -1; i--) {
  console.log(testArray[i]);  //do a backflip! Err, a backward loop rather
}

//2. While loops
var i = 10; //variable initialized to a value of 10
while (i < 19) { //loop will run so long as i is less than 19
     console.log("Power level rising to " + i); i++; //loop increments upward
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













