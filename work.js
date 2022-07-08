const friends = ["Ryan", "Kieran", "Mark"];
let arr = [];
friends.forEach(item => {
  if (item.length === 4) {
    arr.push(item)
  }
});
console.log(arr);
