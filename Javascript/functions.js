//Challenge: Calculating Moon Orbits

function moonOrbits(earthDays) {
  const numOfMoonOrbits = (earthDays / 27.3).toFixed(3);
  return numOfMoonOrbits;
}

console.log(moonOrbits(54));
console.log(moonOrbits(365));

//Challenge: Working with Circles

function circleArea(radius) {
  return (Math.PI * radius * radius).toFixed(2);
}
console.log(circleArea(10));

function circlePerimeter(radius) {
  return (2 * Math.PI * radius).toFixed(2);
}
console.log(circlePerimeter(10));

//Challenge: Years to Days & Seconds
function ageInDays(years) {
  return years * 365;
}

console.log(ageInDays(32));

function ageInSeconds(years) {
  return years * 365 * 24 * 60 * 60;
}

console.log(ageInSeconds(32));

//Challenge: Return the Remainder from Two Numbers

function remainder(num1, num2) {
  return num1 % num2;
}
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

//Challenge: Basketball Points
function basketballScore(numOfTwoPointers, numOfThreePointers) {
  const score = numOfTwoPointers * 2 + numOfThreePointers * 3;
  return score;
}
console.log(basketballScore(1, 2));

//Challenge: Less Than 100?
function lessThanHundred(num1, num2) {
  const sum = num1 + num2;
  if (sum < 100) return true;
  else return false;
}

console.log(lessThanHundred(22, 15));
console.log(lessThanHundred(83, 34));
console.log(lessThanHundred(3, 77));
