// Create an object called person with properties name, age, and city. Set their values to "John", 30, and "New York" respectively.
// Add a method called greet to the person object that logs "Hello, my name is John."



const person = {               // object has been delared name person

    name: "John",              //object key is define has name and its value is John

    age: 30,                    //object key is define has age and its value is 30

    city: "New York"               //object key is define has city and its value is New York   

}


person.greet = function () {
    console.log("hello , my name is",person.name)   //adding message to console "Hello my name is " then adding key value "john"
}
person.greet();

// created on 01/11/2024