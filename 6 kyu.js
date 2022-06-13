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
