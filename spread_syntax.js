/*
This JavaScript file demonstrates various uses of the spread syntax in JavaScript. It covers five main tasks:
1. Using the spread syntax to pass an array of numbers as arguments to a sum function.
2. Merging two arrays into one using the spread syntax.
3. Inserting additional elements at the beginning and end of an array using the spread syntax.
4. Cloning an object and then modifying the clone without affecting the original object using the spread syntax.
5. Combining two objects into a new object, with properties from the second object overwriting those in the first if they conflict, using the spread syntax.

Each task is intended to provide practical examples of how spread syntax can simplify working with functions, arrays, and objects in JavaScript.
*/

// Define the sum function
function sum(a, b, c) {
    return a + b + c;
  }
  
  // Create an array of numbers
  const numbers = [1, 2, 3];
  
  // Call the sum function using spread syntax and print the result
  console.log(sum(...numbers));

  // Define the arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge the arrays using spread syntax
const mergedArray = [...array1, ...array2];

// Print the merged array
console.log(mergedArray);

// Define the colors array
const colors = ['red', 'green', 'blue'];

// Create extendedColors array with additional elements
const extendedColors = ['yellow', ...colors, 'purple'];

// Print the extended array
console.log(extendedColors);

// Define the person object
const person = { name: 'John', age: 30 };

// Clone and modify the object
const newPerson = { ...person, name: 'Jane', gender: 'female' };

// Print both objects
console.log(person);
console.log(newPerson);

// Define the objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// Combine the objects
const combinedObject = { ...object1, ...object2 };

// Print the combined object
console.log(combinedObject);
