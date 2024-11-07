// using stack

let result = [];

function flatten3(arr) {
  let stack = [...arr];

  while (stack.length) {
    let item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }
  return result.reverse()
}

console.log(flatten3([1, 2, [3, [4], 4], 2]));
