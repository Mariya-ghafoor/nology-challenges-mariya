//Challenge: Generating Unique Random Numbers

// n = 1;
// let randNoList = [];

// while (n <= 10) {

//not including 0 or 15

//   let randNo = Math.floor(Math.random() * 14 + 1);

//   if (!randNoList.includes(randNo)) {
//     randNoList.push(randNo);
//     n++;
//   }
// }
// console.log(randNoList);

// Challenge: generateNumbers function

function generateNumbers(n, r, isUnique) {
  let i = 0;
  let numList = [];
  while (i < n) {
    let randNo = Math.floor(Math.random() * r);

    if (isUnique && !numList.includes(randNo)) {
      numList.push(randNo);
      i++;
    } else if (!isUnique) {
      numList.push(randNo);
      i++;
    } else {
      continue;
    }
  }
  return numList;
}

console.log(generateNumbers(10, 20, false));
console.log("hello");
