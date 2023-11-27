
Write a function named isNumber that accepts a value of any type and returns the boolean true or the boolean false based on whether the parameter is a number.

functionisNumber()  {
    if (input === 5 ) {
        return  true ;
    } else {
        return  false;
    }
}

let input = 5
console.log(isNumber);

console.log(isNumber(5)); // outputs true
console.log(isNumber("bob")); // outputs false
console.log(isNumber(true)); // outputs false

// Write a function named sumOfStringLengths that accepts an array of strings. The function returns the sum of the lengths of all the strings in the array.
//
// console.log(sumOfStringLengths([""])); // outputs 0
// console.log(sumOfStringLengths(["the", "big", "pizza"])); // outputs 11
//
// Write a function named findTheFirstNumber that accepts an array of any types and returns the index of the first element in the array that is a number. Use your isNumber function from problem 1. Return -1 if no number is in the array.
//
// console.log(findTheFirstNumber(["the", "big", 3, "pizza"])); // outputs 2
// console.log(findTheFirstNumber(["the", "big", "pizza"])); // outputs -1
// console.log(findTheFirstNumber([1, "x", 2, "y"])); // outputs 0
//
// Write a function called makePerson that accepts two strings and a number as parameters and returns an object where the first string is the object's firstname field, the second string is the object's lastname field, and the number is the object's age field.
//
// console.log(makePerson("bob", "smith", 42));
// // outputs { firstname: 'bob', lastname: 'smith', age: 42 }
//
// Write a function named getFullName that accepts an object with the fields firstname and lastname. The function returns a concatenation of the firstname and lastname fields with a space between them.
//
// console.log(getFullName({
//     firstname: "Bob",
//     lastname: "smith"
// })); // outputs Bob smith
//
// console.log(getFullName({
//     firstname: "RAGNAR",
//     lastname: "Jonez",
//     age: 42
// })); // outputs RAGNAR Jonez
//
// Write a function called getAverageAge that accepts an array of objects. Each object has an age field. The function returns the average of all the ages in the array's objects. You may assume that no array will be empty and that all objects have an age field that is a number.
//
// console.log(getAverageAge([
//     {
//         age: 20
//     },
//     {
//         firstname: "bob",
//         age: 42
//     }
// ])); // outputs 31
//
// Write a function called findShortestFullName that accepts an array of objects. Each object has the fields firstname and lastname. The function returns the full name that has the shortest length. A full name is the concatenation of firstname and lastname fields with a space between them. If more than one full name have the same shortest length, your function will return the FIRST full name that has the shortest length. You may assume that no array will be empty and that all objects have firstname and lastname fields that are strings. Use your getFullName function from problem 4.
//
// console.log(findShortestFullName([
//     {
//         firstname: "ragnar",
//         lastname: "smith",
//         age: 42
//     },
//     {
//         firstname: "tom",
//         lastname: "cat"
//     },
//     {
//         firstname: "sue",
//         lastname: "xyz"
//     }
// ])); // outputs tom cat
//
// Write a function called getLengthOfWords that takes a string and returns the total number of characters of the words in the string. A "word" is defined as non-whitespace characters separated from other words by a space. Use your sumOfStringLengths function from problem 2.
//
// console.log(getLengthOfWords("the quick brown fox")); // outputs 16
// console.log(getLengthOfWords("1 fish 2 fish red fish blue fish")); // outputs 25
//
