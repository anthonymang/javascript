// Rome's Examples
const animals = ['🐱', '🐶', '🦁', '🦊', '🐯'];
const cars = ['🚗', '🚙', '🏎', '🚕', '🚓'];
const sports = ['⚽️', '🏀', '🏈', '🏐', '🎾', '🏉'];
const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];
const differentArray = [1, 'two', '3', 4, 'five', 6, '7', 'eight', 9, '10'];
const twoDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// My Examples
const favoriteArtists = ["Erykah Badu", "Eartheater", "Parquet Courts", "Jamie XX", "Eris Drew", "Octo Octa"]
const randomEmojis = ["😳", "😛", "😈", "🙉", "🐥"]
const reallyCoolPodName = ["Anthony Manganiello", "Jordan Wright", "Vinny Vilasboa", "Edison Fu", "Edward Schultz", "Jeremy Wilder", "Omar Munoz"]
const my2DArray = [["This", "Is", "Confusing"], ["How", "Is", "An", "Array"], ["Inside", "Another", "Array"]]

console.log(favoriteArtists)
console.log(randomEmojis)
console.log(reallyCoolPodName)
console.log(my2DArray)

// Methods
let animalLength = animals.length; 
const carsAndProfessionals = cars.concat(professionals);
console.log(animalLength);
// 5
console.log(carsAndProfessionals);
// ["🚗", "🚙", "🏎", "🚕", "🚓", "👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
console.log(reallyCoolPodName.indexOf('Anthony Manganiello'))
// 6
console.log(reallyCoolPodName);
// ["Paula Bauerman", "Brandon Hall", "Thomas Duong", "Paul Knick", "Evan Woodworth", "Aaron Prince", "Brianna Giorgi", "Maurice Chevez", "Amanda Posey"]0: "Paula Bauerman"1: "Brandon Hall"2: "Thomas Duong"3: "Paul Knick"4: "Evan Woodworth"5: "Aaron Prince"6: "Brianna Giorgi"7: "Maurice Chevez"8: "Amanda Posey"length: 9__proto__: Array(0)
console.log(reallyCoolPodName[6]);

console.log(reallyCoolPodName.indexOf('Anthony Manganiello'));
// -1
console.log(professionals.pop());
// "👨🏼‍⚖️"
console.log(professionals);
//  ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾"]
console.log(professionals.push('👨🏼‍⚖️'));
// 4
console.log(professionals);
// ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
console.log(cars.includes('Rome'));
// false
console.log(cars.includes('🚓'));
// true
console.log(numbers);
//  [1, 66, 48, 9, 23, 19, 20, 66, 30]
console.log(numbers.toString());
// "1,66,48,9,23,19,20,66,30"
let stringOfNumbers = numbers.toString();
console.log(stringOfNumbers);
"1,66,48,9,23,19,20,66,30"
console.log(stringOfNumbers.split(','));
// ["1", "66", "48", "9", "23", "19", "20", "66", "30"]
let moreStrings = "1-66-48-9-23-19-20-66-30";
console.log(moreStrings.split('-'));
// ["1", "66", "48", "9", "23", "19", "20", "66", "30"]

teams.reverse();
console.log(teams)

// reallyCoolPodName.reverse();
console.log(reallyCoolPodName)

teams.sort();
console.log(teams);

teams.shift();
console.log(teams);

teams.unshift("Bulls");
console.log(teams);

for (let i=0; i < teams.length; i+=1) {
    let teamElement = teams[i];
    console.log(teamElement + ' Win');
}

for (let i=0; i < vowels.length; i+=1){
    console.log(`${vowels[i]} is an awesome vowel`);
}

for (let i=0; i< storageUnit.length; i+=1) {
    console.log("We have the " + storageUnit[i]);
}

for (let i=2; i < reallyCoolPodName.length; i+=1) {
    console.log(reallyCoolPodName[i] + " is not my lab partner")
}
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()

// Methods for Strings
// anchor: ƒ anchor()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// __proto__: Object

// Number Methods
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __proto__: Object