export const sum = (...args) => {
  if ([...args].length === 0) {
    throw new Error("This function needs at least one argument");
  }

  if (![...args].every((num) => typeof num === "number")) {
    throw new Error("This function takes only numbers");
  }
  return [...args].reduce((acc, next) => acc + next);
};

//console.log(sum());
