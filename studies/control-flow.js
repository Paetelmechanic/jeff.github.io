// CONTROL FLOW
/* Control flow is the order that your computer runs or executes the code in.
*/
//1. If statement
// Starting with the IF statement, the computer evaluates a conditional to see if
//it is true or false. If it evaluates true, then a block of code is run. If it
//is false then continue on to else if statements or the else statement.
var year = 3000;
if (year > 2019) {
    console.log("Welcome to the future");
}  // prints "Welcome to the future" because condition was satisfied

//2. Else-if statement
//Secondly, the Else-if statement runs if the first if statement did not. It 
//evaluates another condition testing if it is true or false. If it is true then
//its own code block will run. If it is false, however.. keep going to other 
//else if statements or the final else statement.
var year = 2000;
if (year > 2019) {
    console.log("Welcome to the future");
} else if (year < 2018) {
    console.log("We gotta get back to the future, Marty!");
}  //prints the log message because the secondary condition was met

//3. Else statement
//Finally, the else statement runs in the final situation if no other condition
//is found to be true. It is the catch all that will run if no other if or else
//if statement does.
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

//Switch statements run similarly to if statements but in a more condensed form.
//Switch statements take a variable and test if it is true in various cases. If
//it evaluates to true then a block of code is run. However, if it gets through
//all cases and none are true, then the default code block runs. All switch 
//statements require a default code block
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
        
