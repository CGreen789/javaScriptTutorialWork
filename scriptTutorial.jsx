var a; // declared the variable
var b = 2; //declared the variable and assigned it
a = 7; // assigned 7 to a
b = a; // now assigned contents of a to b

console.log(a) //runs the console and shows the variable you have stated

//Initialise these three variables

var a = 5;
var b = 10;
var c = "Catherine";

a = a + 1;
b = b + 5;
c = c + " Green!"

// Use camelCase when writing
// catherineGreen

//adding one
var myVar = 11;
myVar++;
console.log(myVar);

//subtracting one
var myVar = 11;
myVar--;
console.log(myVar);

// Compound assignment with augmented addition
var a = 3;
var b = 17;
var c = 12;

a += 12; // same as a = a + 12
b += 9;
c += 7;

// Compound assignment with augmented subtraction
var a = 3;
var b = 17;
var c = 12;

a -= 12; // same as a = a - 12
b -= 9;
c -= 7;

// Compound assignment with augmented multiplication
var a = 5;
var b = 12;
var c = 4.6;

a *= 12; // same as a = a * 12
b *= 9;
c *= 7;

// Compound assignment with augmented division
var a = 5;
var b = 12;
var c = 4.6;

a /= 12; // same as a = a / 12
b /= 9;
c /= 7;

//Declare string variables

var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Catherine";
var myLastName = "Green";

//Escaping Literal Quotes in Strings

var myStr ='I am a "double quoted" string inside "double quotes"';
console.log(myStr);

//quoting strings with single quotes

/*
CODE    OUTPUT

\'      single quote
\"      double quote 
\\      backslash
\n      new line
\r      carriage return
\t      tab 
\b      backspace
\f      form feed 

*/

// example

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings using +

var ourStr = "I come first. " + "I come second.";

var myStr ="This is the start." + "This is the end.";
console.log(myStr)

// Concatenating Strings using +=

var myStr = "This is the first sentence. ";
myStr += "This iis the second sentence.";

console.log(myStr)

//Constructing Strings with Variables

var myName = "Catherine";
var myStr = "My name is " + myName + " and I am well";
console.log(myStr);

//Appending Variables to Strings

var someAdjective = "worthwhile!";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Find length of a string = variable.length
// Bracket Notation to Find Frist Character in string ZERO INDEXING

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastname[0];
console.log(firstLetterOfLastName);

//String immutability - they cannot be altered once created.
//Bracket Notation to find the nth character in string [change this number]
//Finding the last letter of a string [Length - 1]

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

//Bracket Notation to find the nth to last character in string [change this number]

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 2]; //This is will be the second to last letter

//Word Blanks

function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the shop " + myAdverb + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("pineapple", "smelly", "hopped", "carefully"));

//Store Multiple values with arrays
var myArray = ["John", 23];

//Nested Arrays
var ourArray = [["the universe, 42"], ["everything", 101010]];
var anotherArray = [["Chicago", 12], ["New York", 1], ["Maine", 5], 6, 9];

// Access Array Data with Indexes
var myArray = [50, 60, 70];
var myData = myArray[0]; // 50

//Modify array with data indexes - you can edit these using []

var myArray = [18, 64, 99];
myArray[2] = 19; //changes the 99 to 19

//Access multi-dimensional arrays using []

var myArray = [[1, 2, 3], [4, 5, 6], [[10, 11, 12], 13, 14]];

var myData = myArray[0][1] // = 2. The first array, second number.

//Manipulate arrays with push() - puts things on the end of the array

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["love", 19]);

//Manipulate arrays with pop() - removes last item from the array, puts it in a variable

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(); // removed cat, 2

//Manipulate arrays with shift() - removes first item from the array, puts it in a variable

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift(); // removed John, 23

//Manipulate arrays with unshift() - adds an element to the beginning

var myArray = [["John", 23], ["cat", 2]];
myArray.shift(); //removes John, 23

myArray.unshift(["Paul", 17]); // Adds onto the beginning before cat, 2

//Shopping List

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

//Write reusable code with functions

/* function functionName() {
    console.log("Hey World");
}
functionName(); runs the function
*/

function reusableFunction() {
    console.log("Hi, World!");
}
reusableFunction();

//Passing values to functions with arguments

function ourFunctionWithArgs(a, b) { //a and b are placeholders
    console.log(a-b);
}
ourFunctionWithArgs(10, 5); //outputs 5

function functionWithArgs(a, b) {
    console.log(a+b);
}
functionWithArgs(10, 6); // outputs 16

/*Global scope and functions
scope = visibility of variables
 if a variable is set USING VAR in a function =  only seen in that one function
if the variable is set WITHOUT VAR, it will be global.
 */

//Local scope and functions - cannot access variables only defined within a function

//Global vs. Local Scope in functions - can have the same named variables
//Local variable takes precedent

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit()); // will show "sweater" as its defined locally. 

//Return a Value from a Function with Return
function minusSeven(num) {
    return num - 7;
}
console.log(minSeven(10)); // 10 = num

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));



