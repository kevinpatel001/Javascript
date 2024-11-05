// create and array and write the fliter of odd number and add map of multiple by 10

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = array.filter(numbs => numbs % 2 != 0)
    .map(numbs => numbs * 10).map(numbs => numbs / 5);

// const newArray=array.filter(numbs=>{ return numbs%2!=0})
// .map(numbs => {return numbs * 10}).map(numbs => {return numbs / 5});



console.log(newArray);
