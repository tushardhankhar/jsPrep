function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(3));

function infiniteSum(a) {
  return function (b) {
    if (b !== undefined) {
      return infiniteSum(a + b);
    }
    return a;
  };
}
