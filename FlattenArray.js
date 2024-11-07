function flat(arr, depth = 1) {
  let result = [];
  let currentDepth = 0;
  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && currentDepth <= depth) {
        flatten(arr[i], currentDepth + 1);
      } else result.push(arr[i]);
    }
  }
  flatten(arr);

  return result;
}

/// with reduce and recursive

function flat(arr, depth = 1) {
  return arr.reduce((acc, item) => {
    Array.isArray(item) && depth > 0
      ? acc.concat(flat(item, depth - 1))
      : [...acc, item];
  }, []);
}

console.log(flat([1, 2, [2, [34]]]));
