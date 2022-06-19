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

//Array.diff
function arrayDiff(a, b) {
  let dif = a.filter((i) => !b.includes(i));
  return dif;
}

//Where is my parent!?(cry)
function findChildren(dancingBrigade) {
  return dancingBrigade
    .split('')
    .sort((a, b) => a.localeCompare(b, 'en', { caseFirst: 'upper' }))
    .join('');
}

//Consecutive Count
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
