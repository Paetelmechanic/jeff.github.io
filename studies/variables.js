/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// 4. Var, Let, and Const//
/* 
* Var keyword assigns the variable a global scope
* Let keyword has a blocked scope and locala scope 
* Const keyword assigns the variable with a value that cant be changed
*/
var myExample = 5; // initializes the variable with a value of 5 that 
// can be re-assigned
console.log(myExample); // prints 5 to the console

// --------------------------------------------------- //

function letTest() {
    let myExample2 = "This string has blocked scope";
    if (true) {
       let myExample2 = "I love my puppy Loki"; // The avariable here is different
       console.log(myExample2); // Logs "I love my puppy Loki"
    }
    console.log(myExample2); // Logs "This string has blocked scope"
}

// 5. Hoisting //
/*
* A variable's value can be changed depending on its declaration and scope
*/

console.log(x) //Will log 'doggy' because X is hoisted to the top of the scope
// it appears in, and is accessible to the console.log
 var x = "doggy";

let y = 'kitty'; 
console.log(y) //Will log undefined if y had been declared below the console.log because the y variable is not hoisted and is
//unavailable to the console.log, buuuuut it is available now because it is above the console.log();


// NOTE: We can assign and re-assign anything to a variable - we cannot do this
//with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";