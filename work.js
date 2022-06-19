// input = [9, 5, 4, 7, 6, 3, 8, 2];

// output = [
//   [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
//   [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2
//   [9, 8],                    // results of 9 vs 7 and 6 vs 8
//   [9]                        // results of 9 vs 8
// ];

// const array = [9, 5, 4, 7, 6, 3, 8, 2];
// let arr2 = [];
// for (let i = 0; i < array.length; i = i + 2) {
//   if (array[i] > array[i + 1]) {
//     arr2.push(array[i]);
//   } else {
//     arr2.push(array[i + 1]);
//   }
// }
// console.log(arr2);

// if (arr2.length === 1) {
//   console.log(arr2);
// } else {
//   let arr3 = [];
//   for (let i = 0; i < arr2.length; i = i + 2) {
//     if (arr2[i] > arr2[i + 1]) {
//       arr3.push(arr2[i]);
//     } else {
//       arr3.push(arr2[i + 1]);
//     }
//   }
//   console.log(arr3);
// }

const arr1 = [1, 2, 2, 3]
const arr2 = [3, 3, 2, 1];
// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, '4'];

// if (a.length !== b.length) {
//   console.log(false);
// } else {
//   for (var i = 0; i < a.length; i++) {
//     if (typeof a[i] !== typeof b[i]) {
//       console.log(false);
//     } else if (b.includes(a[i])) {
//       console.log(true);
//     }
// }
// }

// if (arr1.length !== arr2.length) {
//   console.log(false);
// } else {
//   for (var i = 0; i < arr1.length; i++) {
//     if (typeof arr1[i] !== typeof arr2[i]) {
//       console.log(false);
//     } else {
//       if (arr2.includes(arr1[i])) {
//         console.log(true);
//       }
//     }
//   }
// }

// if (arr1.length !== arr2.length) {
//   console.log(false);
// } else {
//   let res = [];
//   for (var i = 0; i < arr1.length; i++) {
//     if (typeof arr1[i] === typeof arr2[i] && arr1.sort().every(function(value, index) { return value === arr2.sort()[index]})) {
//       res.push('true');
//     } else {
//       res.push('false');
//     }
//   }
//   console.log(res);
//   if (res.includes('false')) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }
