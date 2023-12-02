// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {

  let counterArr = []
  for (let ingredient in recipe){
      available[ingredient] ? counterArr.push(Math.floor(available[ingredient] / recipe[ingredient])) : counterArr.push(0)
  }
  return Math.min(...counterArr)
} 


// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

var solution = function(firstArray, secondArray) {
  const arr = secondArray.map((item, index) => {
    return (item - firstArray[index]) ** 2;
  });

  return arr.reduce((acc, item) => acc + item, 0) / arr.length;
}


// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
function domainName(str){
  let domain = [];
  let startIndex;
  const arr = str.split('');
  arr.map((item, index) => {
    if (arr[index - 1] === '/' && arr[index - 2] === '/') {
      startIndex = index;
    }
    if (
      arr[index - 1] === '.' &&
      arr[index - 2] === 'w' &&
      arr[index - 3] === 'w' &&
      arr[index - 4] === 'w'
    ) {
      startIndex = index;
    }
  });

  arr.splice(0, startIndex);
  for (const value of arr) {
    if (value === '.' || value === '/') {
      break;
    }
    domain.push(value)
  }

  return domain.join('')
}

// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr){
  let str = arr.join(',');
  for (let i = 0; i < 10; i++) {
    str = str.replace('NORTH,SOUTH', ',');
    str = str.replace('SOUTH,NORTH', ',');
    str = str.replace('WEST,EAST', ',');
    str = str.replace('EAST,WEST', ',');
    str = str.replace(',,', ',')
  }

  return str.split(',').filter((item) => item !== '');
}