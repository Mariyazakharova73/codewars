function validatePIN(pin) {
  if (/^[0-9]+$/.test(pin) && String(pin).length == 4 && pin >= 0) {
    return true;
  } else if (/^[0-9]+$/.test(pin) && String(pin).length == 6 && pin >= 0) {
    return true;
  } else {
    return false;
  }
}

function isNarcissistic(n) {
  let num = String(n);
  let arr = Array.from(num);
  const sum = arr.reduce(function (previousValue, item) {
    return previousValue + item ** arr.length;
  }, 0);
  return n === sum;
}

function incrementer(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let res = nums[i] + i + 1;
    if (String(res).length === 1) {
      arr.push(res);
    } else {
      let str = String(res);
      let arr2 = Array.from(str);
      console.log(arr);
      arr.push(Number(arr2.slice(-1)));
    }
  }
  return arr;
}

function vowelIndices(word) {
  let x = word.toLowerCase();
  let arr = x.split('');
  let arr2 = [];
  let b = arr.map(function (item, index) {
    if ((item === 'a') | (item === 'e') | (item === 'i') | (item === 'o') | (item === 'u') | (item === 'y')) {
      return arr2.push(index + 1);
    }
  });
  return arr2;
}

function isCoprime(x, y) {
  arr1 = [];
  for (i = 0; i <= x; i++) {
    let ost = x % i;
    if (ost === 0) {
      arr1.push(i);
    }
  }
  arr2 = [];
  for (i = 0; i <= y; i++) {
    let ost = y % i;
    if (ost === 0) {
      arr2.push(i);
    }
  }
  let intersection = arr1.filter((x) => arr2.includes(x));
  if (intersection.toString() === '1') {
    return true;
  } else {
    return false;
  }
}

function evenNumbers(array, number) {
  const arr2 = array.filter(function (item) {
    return item % 2 === 0;
  });
  const arr3 = arr2.slice(arr2.length - number);
  return arr3;
}

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  } else if (begin === end) {
    return begin;
  } else {
    let result = 0;
    for (let i = begin; i <= end; i = i + step) {
      result += i;
    }
    return result;
  }
};

function squareDigits(num) {
  return Number(
    Array.from(String(num))
      .map((item) => {
        return item ** 2;
      })
      .join('')
  );
}

function missingNo(nums) {
  let arr = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i <= arr.length; i++) if (i != arr[i]) return i;
}

// Sum of all arguments
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

// Ghostbusters (whitespace removal)
function ghostBusters(building) {
  if (building.includes(' ')) {
    return building.replace(/ /gi, '');
  } else {
    return "You just wanted my autograph didn't you?";
  }
}

// Length and two values.
function alternate(n, firstValue, secondValue) {
  let arr = [];
  for (let i = 0; i < n / 2; i++) {
    arr.push(firstValue);
    arr.push(secondValue);
  }
  if (!(n % 2 === 0)) {
    arr.pop();
    return arr;
  } else {
    return arr;
  }
}

//https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript
function consecutive(arr, a, b) {
  let arr2 = [];
  arr.forEach(function (item, index) {
    if (item === a && arr[index + 1] === b) {
      arr2.push(true);
    } else if (item === a && arr[index - 1] === b) {
      arr2.push(true);
    } else {
      arr2.push(false);
    }
  });
  const result = arr2.some(function (item) {
    return item === true;
  });
  return result;
}
//https://www.codewars.com/kata/564d398e2ecf66cec00000a9/train/javascript
var typeOfTriangle = function (sideA, sideB, sideC) {
  let arr = [sideA, sideB, sideC];
  let arr2 = arr.sort(function (a, b) {
    return a - b;
  });
  if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof sideC !== 'number' || arr2[0] + arr2[1] <= arr2[2]) {
    return 'Not a valid triangle';
  } else {
    if (sideA === sideB && sideA === sideC && sideB === sideC) {
      return 'Equilateral';
    } else {
      if (sideA === sideB || sideA === sideC || sideB === sideC) {
        return 'Isosceles';
      } else {
        return 'Scalene';
      }
    }
  }
};
