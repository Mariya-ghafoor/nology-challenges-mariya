let n = 2;
if (typeof n == "number") {
  if (n % 2 == 0) {
    console.log("n is even");
  } else {
    console.log("n is odd");
  }
} else {
  console.log("invalid n");
}

//Check for smallest value
let x = 2;
let y = 3;

if (x > y) {
  console.log("x is greater than y");
} else if (x == y) {
  console.log("x is equal to y");
} else {
  console.log("x is smaller than y");
}

//User input type
let userInput;

if (typeof userInput === "number") {
  console.log(userInput ** 2);
} else if (typeof userInput === "string") {
  console.log(userInput);
} else {
  console.log("Invalid input");
}
