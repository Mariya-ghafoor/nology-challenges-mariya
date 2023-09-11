//Create a function with a for loop that will add all the numbers up to n
// function sum(n) {
//   let x = 0;
//   for (i = 1; i <= n; i++) {
//     x += i;
//   }
//   return x;
// }

function sum(n) {
  //Array(n) creates an array of n length
  //keys() will create an object with indices
  //Array.from will convert it into array

  const numArr = Array.from(Array(n + 1).keys());
  console.log(numArr);

  let sum = numArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum;
}

console.log(sum(10));

function add(n) {
  const numbersAdded = (n * (n + 1)) / 2;
  console.log(numbersAdded);
}

add(10);

// var sum = myNums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// },0);

// const newArr = Array.from(Array(10).keys()).slice(1);
// return newArr;

//Challenge: Write a shopping list
function printShoppingList() {
  let shoppingList = [
    "milk",
    "watermelon",
    "eggs",
    "soap",
    "butter",
    "apples",
    "ice-cream",
  ];

  for (i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);
  }
}
printShoppingList();
console.log("### Capitalizing Odd Positioned Letters ###");

//Challenge: Capitalizing Odd Positioned Letters
const myStr = "hello";
let newStr = "";
for (i = 0; i < myStr.length; i++) {
  if (i % 2 != 0) {
    newStr += myStr[i].toUpperCase();
  } else {
    newStr += String.fromCharCode(myStr[i].charCodeAt() + 1);
  }
}
console.log(newStr);

console.log("### Removing Vowels ###");

//Challenge: Removing Vowels
const vowels = ["a", "e", "i", "o", "u"];
const myStrNew = "mariya";
let myFinalStr = "";
let someLetters = ["l", "m", "r"];

for (i = 0; i < myStrNew.length; i++) {
  if (
    !vowels.includes(myStrNew[i]) ||
    (vowels.includes(myStrNew[i]) && someLetters.includes(myStrNew[i + 1]))
  ) {
    myFinalStr += myStrNew[i];
  }
}
console.log(myFinalStr);

console.log("### test ###");
console.log(Array(10 + 1).keys());
