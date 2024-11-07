let result = [];

function flatten1(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      flatten1(item);
    } else result.push(item);
  }
  return result;
}


console.log(flatten1([1,2,[3,[4],4],2]))