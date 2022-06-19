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

// "BbbEeee"
let dancingBrigade = 'beeeEBb';
let arr = dancingBrigade.split('');
// let arr2 = arr.sort(function (a, b) {
//   return b.localeCompare(a);
// });
// let str = arr2.join('')
// console.log(str);
// bbBeeeE

// console.log(dancingBrigade.split('').sort().join(''));
// BEbbeee

// let sort = arr.sort(function (a, b) {
//   console.log(( a + " - " + b ));
//   if (a < b) {
//     return -1;
//   }
//   if (a.toLowerCase() === b.toLowerCase()) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });
// console.log(arr);
