// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // let odd = [];
  // let even = [];
  // for(const res of arr2){
  //   for(const res2 of arr1){
  //     if(res != res2){

  //     }
  //   }
  // }
  return arr1.concat(arr2);
}

console.log(result(arr1, arr2));