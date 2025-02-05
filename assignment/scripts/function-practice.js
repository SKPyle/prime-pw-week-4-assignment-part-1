console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName() {
  return 'Hello Bob!';
}
// Remember to call the function to test
console.log('should say "Hello Bob!"', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumbers', firstNumber, secondNumber);
  let sum = firstNumber + secondNumber;
  return sum;
  // return firstNumber + secondNumber;
}
console.log(addNumbers(5,8));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
let product = num1 * num2 * num3;
return product;
}
console.log(multiplyThree(2,4,7));
console.log(multiplyThree(6,7,9));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let friends = ['Matt', 'Carol', 'Charlie', 'Anna'];
let bands = ['Nirvana', 'Led Zeppelin', 'Radiohead'];
let cats = [];
function getLast( array ) {
 let last = array[array.length - 1]
if (array.length > 0) {
  return last; 
} else {
return "undefined";
}
}
console.log(getLast(friends));
console.log(getLast(cats));
console.log(getLast(bands));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find( value, array ){
  for (let i=0; i<array.length; i++){
    console.log('array value found?', array[i]);
    console.log(value)
    if (array[i] === value) {
      return true;
    }
  } // end of for loop
  return false;
}
console.log(find(4,5));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
