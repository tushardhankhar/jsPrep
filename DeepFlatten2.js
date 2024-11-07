// Using Reduce and concat

function flatten2(arr, depth = 1) {
  return arr.reduce((acc, item) => {
    return Array.isArray(item) && depth > 0
      ? acc.concat(flatten2(item, depth - 1))
      : acc.concat(item);
  }, []);
}
console.log(flatten2([1, 2, [3, [4], 4], 2]));
