//FUNctions
/* 
*/

//1. Declaring and Invoking functions
function simpleMath(a, z) { //The function is declared here. The parameters are listed
                            // as well as the statement to be executed with the parameters.
    return a + z;
}

simpleMath(4, 8); //The function is called, invoked, or executed here. Its doing what it 
                  // was programmed to do. And the circle of life continues.

//2. Parameters vs. Arguments PASSED to a Function
function simpleMath(a, z) {  //On this line, a and z are parameters found in the definition 
    return a + z;  //They take the values of the parameters in the invocation step
}
//Upon further review, a + z in line 16 are not arguments. The arguments are passed to the 
//function at the time of its invocation such as below:
simpleMath(4, 8);


//3. NAMED Function Syntax
/*Lets use the above function again. It is a named function. Its name is simple Math
* Named functions have their definitions hoisted to the top of their scope, so they can
* be used before they appear to be sequentially defined
*/
simpleMath(50, 100); //still works here even though it is being called before it is defined
function simpleMath(a, z) { 
    return a + z;
}

//4. Assigning a Function to a Variable
//Easy peasy. Literally just assign a variable to it.
var x = simpleMath(5, 4); //function has been assigned to variable x. 
function simpleMath(a, z) { 
    return a + z;
}
var msg = x + " is the correct answer";
console.log(msg);

//5. Specifying Inputs and Outputs
// Functions Inputs are the same as their parameters. In order to get an output though,
// we must return a value. If a value is not returned then the function will stay undefined
function simpleMath(a, z) { // a and z on this line are inputs or parameters
    return a + z; //a + z will evaluate to the returned output after the code runs
}
//6. Scope
let a = "Benji";

function newPup() {
  let a = "Loki";
  console.log(a);
}
console.log(newPup(a)); //new value, "Loki" is printed because the console.log is scoped
                        // to see the variable a within the function
console.log(a);         //new value, "Loki" is not printed because the console.log is not scoped 
                        //to see the variable inside the function.

//7. Closures
var countdown = function() {
  var counter = 10;  //Variable is declared inside the function with local scope
  return function () {counter -= 1; return counter}; //the second function uses the 
                    //variable from its parent function and keeps its alive. Closure!
}();

countdown();

//Another example of closure is below. The function definition below access a variable outside of its scope
//in its return statement. This is the definition of a closure.
var testNumber = 10;

var add = function () {
  let innerNumber = 5; //Scope is also at play here. innerNumber is defined locally in this function and is 
  //unavailable outside the function.
  return testNumber + innerNumber;
};

console.log(add());
//console.log(innerNumber)  (This variable is not accessible here because is not available outside its scope)








