//https://learn.javascript.ru/while-for
// const n = 10;
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && j < i) {
//       break;
//     } else if (j === i) {
//       console.log(i);
//     }
//   }
// }

// https://learn.javascript.ru/switch#tasks

// const number = +prompt("Введите число между 0 и 3", "");

// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// https://learn.javascript.ru/function-basics#tasks

// function pow(a, b) {
//   let res = 1;
//   for (let i = 1; i <= b; i++) {
//     res *= a
//   }
//   return res
// }

// console.log(pow(2, 4))

//https://learn.javascript.ru/object#tasks

// function isEmpty(obj) {
//   for (let key in obj) {
//     console.log(faise);
//   }
//   console.log(true);
// }

// isEmpty({});

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum)

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);
// console.log(menu);

// https://learn.javascript.ru/array#tasks

// const arr = ['Джаз', 'Блюз', 'Рок-н-ролл'];
// let index = Math.floor(arr.length/2)
// arr[index]= "Классика"
// console.log(arr)
// console.log(arr.shift())
// arr.unshift("Реп, Регии")
// console.log(arr)

// function camelize(str) {
//   let arr = str.split("-");
//   return arr.map((item, index) => {
//     return index === 0 ? item : item[0].toUpperCase() + item.slice(1);
//   }).join('')
  
// }
// camelize("list-style-image") == "listStyleImage";

let user = {
  name: "John",
  age: 30
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
