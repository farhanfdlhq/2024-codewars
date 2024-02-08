// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com%2Fkata%2F5861d28f124b35723e00005e&v=WRVXaotldZc

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   //TODO
//   return distanceToPump / mpg <= fuelLeft;
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     //TODO
//     return fuelLeft * mpg >= distanceToPump;
//   };

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(100, 50, 1));
