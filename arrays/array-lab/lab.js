console.log("linked")

// exercise 1
const foods = [];

// exercise 2
foods.push("pizza");
foods.push("cheeseburger");

console.log(foods);

// exercise 3
foods.unshift("taco");

console.log(foods);

// exercise 4
favFood = foods[1];

console.log(favFood);

// exercise 5
foods.splice(2, 0, "tofu");

console.log(foods);

// exercise 6

foods.splice(1, 1, "sushi", "cupcake");

console.log(foods);

// exercise 7
foods.slice(1,3)
yummy = foods.slice(1,3)

console.log(yummy)

// exercise 8
soyIdx = foods.indexOf("tofu");
console.log(foods.indexOf("tofu"));

// exercise 9
allFoods = foods.join("->");
console.log(allFoods);

// exercise 10
let hasSoup = 0;
if (foods.includes("soup")) {
    hasSoup = true;
} else {
    hasSoup = false;
}
console.log(hasSoup)

// exercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
