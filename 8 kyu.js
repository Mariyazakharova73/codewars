function multiply(a, b) {
  return a * b;
}

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

const stringToNumber = function (str) {
  return +str;
};

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

function between(a, b) {
  const result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

function booleanToString(b) {
  return String(b);
}

function multiply(a, b) {
  return a * b;
}

function squareOrSquareRoot(array) {
  array.map(function (item) {
    if (Number.isInteger(Math.sqrt(item))) {
      item = Math.sqrt(item);
    } else {
      item = item ** 2;
    }
    array.push(item);
  });
  array.splice(0, array.length / 2);
  return array;
}

function lovefunc(flower1, flower2) {
  if ((flower1 % 2 == 0 && flower2 % 2 !== 0) || (flower2 % 2 == 0 && flower1 % 2 !== 0)) {
    return true;
  } else {
    return false;
  }
}

function removeEveryOther(arr) {
  let newarr = arr.filter(function (item, index) {
    if (index % 2 == 0) {
      return item;
    }
  });
  return newarr;
}

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

function remainder(n, m) {
  if (n > m) {
    return n % m;
  } else {
    return m % n;
  }
}

function helloWorld() {
  var str = 'Hello World!';
  console.log(str);
}

function nameShuffler(str) {
  let a = str.split(' ');
  console.log(a);
  let n = [a[1], a[0]];
  console.log(n);

  return n.join(' ');
}

function doubleChar(str) {
  let arr = str.split('');
  let arr2 = arr.map(function (item) {
    return (item += item);
  });
  return arr2.join('');
}

function doubleInteger(i) {
  let doble = i * 2;
  return doble;
}
