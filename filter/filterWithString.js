// Given an array of words, create a new array that only includes words with more than 4 letters.

const words = ["apple", "banana", "cat", "dog", "elephant"];

const longWords = words.filter(word => word.length > 4);

console.log(longWords)