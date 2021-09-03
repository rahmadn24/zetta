// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  let result1 = false;
  let result2 = false;
  for (const value of arr2) {
    for (const value2 of arr1) {
      if (value2 > value) {
        result1 = true;
      } else {
        result1 = false;
      }


      if (value2 < value) {
        result2 = true;
      }
    }
  }


  const res = [result1, result2];
  return res;
}

console.log(result(arr1, arr2));