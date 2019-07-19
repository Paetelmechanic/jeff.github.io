// CONTROL FLOW
/* Control flow is the order that your computer runs or executes the code in.
*/
//1. If statement
var year = 3000;
if (year > 2019) {
    console.log("Welcome to the future");
}  // prints "Welcome to the future" because condition was satisfied

//2. Else-if statement
var year = 2000;
if (year > 2019) {
    console.log("Welcome to the future");
} else if (year < 2018) {
    console.log("We gotta get back to the future, Marty!");
}  //prints the log message because the secondary condition was met

//3. Else statement
var year = 2018;
if (year > 2018) {
    console.log("Welcome to the future");
} else if (year < 2018) {
    console.log("We gotta get back to the future, Marty!");
} else {
    console.log("Welcome to 2018. Trump is still our president")
} // prints the else statement as neither of the conditions were met :(

//4. Switch statement
var pet = "badger";

switch (pet) {
    case 'parakeet':
        console.log("A fine feathered friend");
        break;
    case 'dog':
        console.log("Loki you da best");
        break;
    case 'cat':
        console.log("Boooo, I want my money back");
        break;
    default:
        console.log("What the heck is a default pet!?")//if none of the above conditions
        // are met then this code is executed
}  //expected log to be "What the heck is a default pet!?"
        
