console.log("linked")

const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

function addNumbers(numbersArray) {
    // add all numbers in the array
    // return a result (what datatype is being returned)
    // 1. declarations
    let result = 0;

    // 2. logic - steps to solve the problem or get a return value
    // loop through array
    for (i=0; i < numbersArray.length; i+=1){
        // let the variable 'temp' equal the current stage of I in the for loops
        let temp = numbersArray[i];

        result += temp; //result = result + temp
    }

    // 3. return value
    return result;
}

//invoke the function
addNumbers(numbers);

//log the return value of the function
console.log(addNumbers(numbers))


const antObject = {
    name: "Anthony",
    location: "Brooklyn",
    genre: "dance"
}

function musicType(type) {
    //what kind of datatype? string
    return type.genre; 
}

let result = musicType(antObject);

console.log(result);

const returnObject = (Object) => {
    return Object;
}

console.log(returnObject(antObject));



