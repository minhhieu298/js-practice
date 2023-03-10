// permutaion string
const str = "Nguyen Minh Hieu";
const strArr = str.split(" ");

function Permutation(input) {
  let result = [];
  function permutate(arr, memo = []) {
    let curr;
    for (let i = 0; i < arr.length; i++) {
      curr = arr.splice(i, 1);
      if (arr.length === 0) {
        result.push(memo.concat(curr));
      }
      permutate(arr.slice(), memo.concat(curr));
      arr.splice(i, 0, curr[0]);
    }
    return result;
  }
  return permutate(input);
}

console.log(Permutation(strArr));

// find arr has max sum
let arr = [
  [1, 2, 3],
  [9, 10, 11],
  [3, 4, 5],
];

let array = [];
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  array.push(sum);
}

function findMax(array) {
  let maxS = array[array.length - 1];
  for (let i = 0; i < array.length; i++) {
    if (maxS < array[i]) {
      maxS = array[i];
    }
  }
  return maxS;
}

function findArrMax(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    if (sum === findMax(array)) {
      return arr[i];
    }
  }
}
console.log(findArrMax(arr));
