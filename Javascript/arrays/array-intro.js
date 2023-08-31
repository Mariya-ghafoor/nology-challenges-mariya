// Challenge: Listing Hobbies

const myHobbies = ["reading", "photography", "cooking"];
//Print in the console the first hobby in the array

console.log(myHobbies[0]);

//Remove that first hobby from the array and store that hobby in a variable
const hobby = myHobbies.shift();
console.log(hobby);

//Store the length of the array in a variable

const lengthOfMyHobbies = myHobbies.length;
console.log(lengthOfMyHobbies);

//Add another hobby at the end of the array

myHobbies.push("music");
console.log(myHobbies);

//Print that last hobby in the console
console.log(myHobbies.pop());

// Bonus:
// Join all your hobbies in a single string each hobby being comma separated (i.e. “My hobbies are: hobby1, hobby2, hobby2”)

const myHobbiesStr = myHobbies.join(",");
console.log(`My hobbies are: ${myHobbiesStr}`);

// Challenge: Grocery Lists
const groceryList = ["bread", "butter", "eggs", "yogurt", "honey"];

console.log(groceryList.join("|"));
