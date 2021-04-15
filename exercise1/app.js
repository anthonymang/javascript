'use strict';

console.log(5+5);

console.log("I am Anthony");

console.log(parseInt('33'));

console.log(parseFloat("3.558327274"));






// Assignment Operators
let age = "33"
let name = "Anthony"

console.log(age.indexOf("3"));

console.log(name.toUpperCase())

console.log(name.toLowerCase());


console.log(name.replace("hony","onio"))

console.log(name.indexOf("h"))

console.log(6 !== 90)


const stopLight = "red";

switch(stopLight){
    case "green":
        console.log('GO');
    case "yellow":
        console.log("Slow Down");
    case "red":
        console.log('STOP!!');
}

let count = 20;


while (count >= 10){
    console.log(count);
    count -= 1;
}

for (let countTwo = 0; countTwo < count; countTwo += 1) {
    console.log(countTwo);
}
