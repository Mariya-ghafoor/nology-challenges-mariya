const myFilter = (myArr, cb) => {
  let newArr = [];

  for (let i = 0; i < myArr.length; i++) {
    if (cb(myArr[i])) {
      newArr.push(myArr[i]);
    }
  }

  return newArr;
};

console.log(myFilter([1, 2, 3, 4, 5], (x) => x > 2));
