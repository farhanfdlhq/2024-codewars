// WPU Coding Challenge 2024
// 12/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
  return (
    arr1.reduce((acc, curr) => acc + curr, 0) +
    arr2.reduce((acc, curr) => acc + curr, 0)
  );
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
