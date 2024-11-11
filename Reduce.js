Array.prototype.myReduce = function (fn, initialValue) {
  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  // Use the provided initialValue directly, even if it's undefined
  let accumulator;
  let startIndex;

  // Check if initialValue was provided
  if (arguments.length >= 2) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = fn(accumulator, this[i], i, this);
  }

  return accumulator;
};

