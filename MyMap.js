Array.prototype.myMap = function (fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap((num) => num * 2));
