//const arr = [1, 2, 3];
//console.log(arr.join("+"));

//Join

const myJoin = (arr, separator) => {
  let myStr = "";
  for (let i = 0; i < arr.length - 1; i++) {
    myStr += arr[i] + separator;
  }
  myStr += arr[arr.length - 1];
  return myStr;
};

console.log(myJoin([1, 2, 3], "+"));

//Reverse

const myReverse = (arr = [1, 2, 3, 4]) => {
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
    console.log(reversedArr);
  }
  return reversedArr;
};
// console.log(myReverse([1, 2, 3, 4]));

//findIndex
// const arr = [1, 2, 3, 4];
// console.log(arr.findIndex((num) => num > 2));

const myFindIndex = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return i;
  }
  return -1;
};

//console.log(myFindIndex([1, 2, 3, 4], (x) => x == 2));

//Reduce
// [1, 2, 3, 4].reduce(cb, initialValue);
// cb(initialValue, currentValue);

const myReduce = (arr, cb, initialValue) => {
  let start = 0;

  // If no initial value is provided then element at index 0 becomes initial value and the loop starts from the index 1
  if (!initialValue) {
    initialValue = arr[0];
    start = 1;
  }

  //If initial value is given then loop starts from index 0 and initial value is added to it

  for (let i = start; i < arr.length; i++) {
    initialValue = cb(initialValue, arr[i]);
  }
  return initialValue;
};

console.log(myReduce([1, 2, 3], (x, y) => x > y, 1));
