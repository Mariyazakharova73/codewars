//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
function persistence(num) {
  function um(n) {
    const arr = Array.from(String(n));
    const result = arr.reduce(function (previousValue, item) {
      return previousValue * item;
    }, 1);
    return result;
  }
  i = 0;
  while (String(num).length > 1) {
    i += 1;
    num = um(num);
  }
  return i;
}

//https://www.codewars.com/kata/58235a167a8cb37e1a0000db
function numberOfPairs(gloves) {
  const countItems = gloves.reduce((item, index) => {
    item[index] = item[index] ? item[index] + 1 : 1;
    return item;
  }, {});
  let result = 0;
  Object.values(countItems).filter((item) => {
    if (item > 1) {
      let z = Math.floor(item / 2);
      result += z;
    }
  });
  return result;
}

//https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
  let dif = a.filter((i) => !b.includes(i));
  return dif;
}

//https://www.codewars.com/kata/58539230879867a8cd00011c
function findChildren(dancingBrigade) {
  return dancingBrigade
    .split('')
    .sort((a, b) => a.localeCompare(b, 'en', { caseFirst: 'upper' }))
    .join('');
}

//https://www.codewars.com/kata/59c3e819d751df54e9000098
function getConsectiveItems(items, key) {
  let imax = 0;
  let ilenght = 0;
  let str = String(items);
  str.split('').forEach(function (item) {
    if (item === String(key)) {
      ilenght += 1;
    } else {
      if (ilenght > imax) {
        imax = ilenght;
      }
      ilenght = 0;
    }
  });
  if (ilenght > imax) {
    imax = ilenght;
  }
  return imax;
}

//https://www.codewars.com/kata/51e704f2d8dbace389000279/javascript
function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let res = [];
    for (var i = 0; i < arr1.length; i++) {
      if (
        typeof arr1[i] === typeof arr2[i] &&
        arr1.sort().every(function (value, index) {
          return value === arr2.sort()[index];
        })
      ) {
        res.push('true');
      } else {
        res.push('false');
      }
    }
    if (res.includes('false')) {
      return false;
    } else {
      return true;
    }
  }
}

//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  } else {
    let length = 0;
    let longestStr = '';
    for (let i = 0; i < strarr.length - k + 1; i++) {
      let sum = '';
      for (let j = 0; j < k; j++) {
        sum += strarr[i + j];
      }
      if (sum.length > length) {
        length = sum.length;
        longestStr = sum;
      }
    }
    return longestStr;
  }
}

//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str) {
  if (str === '') {
    return '';
  } else {
    let arr = str.split(/[ _-]/g);
    let arr2 = arr.map(function (item, index) {
      if (index === 0) {
        return item;
      } else {
        return (item = item[0].toUpperCase() + item.slice(1));
      }
    });
    return arr2.join('');
  }
}
