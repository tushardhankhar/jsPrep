let result = [];

function flatten1(arr, depth = 1) {
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      flatten1(item);
    } else result.push(item, depth - 1);
  }
  return result;
}

console.log(flatten1([1, 2, [3, [4], 4], 2]));
