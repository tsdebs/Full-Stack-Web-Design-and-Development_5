// window.alert("This message is coming from an external JS File")
//use the Double Forward Slash to comment in Javascript

//Data Types
// 1. String: is any character within double Quotation mark or single Quotation
// 2. Number
// 3. Array
// 4. Object
// 5. Undefined
// 6. Null

//Variables: are like containers that store any/various data types.
//so we would have to declare a variable using one of three keywords in javascript
// Var, let or const
// The var and let keywords are used to declare variables whose values can change over time
// The const keyword is used to declare variables whose values are constant.

// Naming Convention when creating and declaring a variable
// 1. There are only two special characters you can use : $ and _ (The dollar sign and the underscore character!)
// 2. The name of your variable must be any combination of the letters of the alphabet
// 3. It is generally preferable to use Camelcase when combining two or more words.
// 4. Spacing (like white space) are not allowed in variable names.

// Example Usage:
// Declaring a variable
var aNewVariable;  // The value in aNewVariable is undefined!
// Assigning a value to a variable
var anotherVariable ="I am a string"
let aLetVariable ='I am a String in single Quote'

//console.log our variables
console.log(anotherVariable)
console.log(aLetVariable)

// More things to know about string is
// String Concatenation is the act of joining two or more strings together
// Example:
var firstSong = 'He has large brain but could not offer full nine subjects' 
var secondSong = 'May all silly people stop calling calling a pope catechist!'
var wholeSong = firstSong + secondSong
console.log(wholeSong)

// Second way to concatenate
var fullSentence = 'Obi is a boy.' + 'simbi is a girl.'
console.log(fullSentence)

//Finding the lengh of a string
var countString = "How long am i ?"
console.log(countString + "I am:" + countString.length)
// NOTE: We use the length property on the string object to get the length of the string.

// String Template Literals

// we can create a string using 
// 1. Double Quote : ""
// 2. Single Quote: ''
// 3. String Literals: uses backtick``

// Example Usage
var string = `The strings are in a string template literal `
console.log(string)

//Example2
var message = "I am learning Javascript."
var mood = "I am happy; yippy!"
var combination = `We are combining this: (message) ${message}, with (mood) ${mood}`
console.log(combination)

// operators
// 1. Assignment Operator eg. =
// An operator is a symbol used to perform operations or actions
// 2. Arithmetic Operators eg. +, -, *, +=, -=, etc
// 3. Increment Operators  eg. ++
// 4. Decrement Operators eg. --
// 5. Logical Operators eg. 
// a.) Or operator whose symbol is: ||
// b.) And operator whose symbol is: &&
// 6. Ternary Conditional Operator

//String Methods
// The slice() method
var string1 = "He is a good person"
var slicedString = string1.slice(7,12)
console.log(slicedString)




