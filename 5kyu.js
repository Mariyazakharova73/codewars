https://www.codewars.com/kata/514a024011ea4fb54200004b
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