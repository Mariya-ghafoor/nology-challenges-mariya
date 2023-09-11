// A function that calculates the sum of numbers
// returns the sum of numbers
// it should work for different amount of arguments - 1 or more

// no parameters sum() -> throw an error
// all parameters must be numbers -> if not throw an error sum(2, "apple", true)

// sum(2)
// sum(2, 3, 4, 5)
// sum(10, 11, 11, 11, 11, 11, 11)

import { sum } from "./sum.js";

describe("test cases for a function that calculates the area of a rectangle", () => {
  it("takes different args", () => {
    expect(sum(2, 3, 4)).toBe(9);
  });

  it("if no parameters must throw error", () => {
    expect(() => {
      sum();
    }).toThrow("This function needs at least one argument");
  });

  it("if one parameter is not a number must throw error", () => {
    expect(() => {
      sum("hello", 2, undefined);
    }).toThrow("This function takes only numbers");
  });
});
