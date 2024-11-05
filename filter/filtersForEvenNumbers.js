// Given an array of numbers, create a new array that only includes the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];      //array has been defined

const evenNumbers = numbers.filter(num => { return num % 2 === 0});       //fliter has been created for even number but this time return tag has been used beacuse there ara curly barcket

console.log(evenNumbers);            // console hase been printed