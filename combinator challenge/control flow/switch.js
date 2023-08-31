//Challenge: Tell me the day!

let day = 6;
let today;

switch (day) {
  case 1:
    today = "Monday";
    break;

  case 2:
    today = "Tuesday";
    break;

  case 3:
    today = "Wednesday";
    break;

  case 4:
    today = "Thursday";
    break;

  case 5:
    today = "Friday";
    break;

  case 6:
    today = "Saturday";
    break;

  case 7:
    today = "Sunday";
    break;

  default:
    today = 0;
}

today ? console.log(`Today is ${today}`) : console.log("Out of range");

// Challenge: Eye Colour

let parent1 = "green";
let parent2 = "green";

let brown;
let green;
let blue;

if (parent1 == "brown" && parent2 == "brown") {
  brown = 75;
  green = 18.75;
  blue = 6.25;
} else if (parent1 == "green" && parent2 == "brown") {
  brown = 50;
  green = 37.5;
  blue = 12.5;
} else if (parent1 == "blue" && parent2 == "brown") {
  brown = 50;
  green = 0;
  blue = 50;
} else if (parent1 == "green" && parent2 == "green") {
  brown = "<1";
  green = 75;
  blue = 25;
} else if (parent1 == "green" && parent2 == "blue") {
  brown = 0;
  green = 50;
  blue = 50;
} else if (parent1 == "blue" && parent2 == "blue") {
  brown = 0;
  green = 1;
  blue = 99;
}

console.log(
  `Your child's eyecolor is ${brown}% brown, ${green}% green and ${blue}% blue `
);
