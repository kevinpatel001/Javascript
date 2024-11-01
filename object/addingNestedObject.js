// Create an object called person with properties name, age, and city. Set their values to "John", 30, and "New York" respectively. 
// Add a nested object address to the person object with properties street and zip set to "5th Avenue" and "10001", respectively.



const person = {               // object has been delared name person
 
    name: "John",              //object key is define has name and its value is John
 
    age: 30,                    //object key is define has age and its value is 30
 
    city: "New York"               //object key is define has city and its value is New York   

}

// adding a nested object address to the person object with properties street and zip set to "5th Avenue" and "10001", respectively.


person.address={

street:"5th Avenue",

 zip:1001,

}

console.log(person);   // printing the console of person