//Merging two object  in one object

const object1 = {

    name: "kevin",

    surname: "patel",                  //object1 is delcare as an abject and key and value has been provide

    age: 24,

}

const object2 = {

    name: "alex",

    surname: "Mercer",                     //object2 is delcare as an abject and key and value has been provide

    age: 30,

}

const object3 = Object.assign({}, object1, object2);              // merging object1 and object2 in object3   First way to merge two object


const object4 = { ...object1, ...object2 };                          //merging object1 and object 2 in object4    Second way to merge twoobject or more





console.log(object3);


console.log(object4);


// created on 01/11/2024