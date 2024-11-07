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

//// CURRYING

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
curriedJoin(1, 2, 3); // '1_2_3'
curriedJoin(1)(2, 3); // '1_2_3'
curriedJoin(1, 2)(3); // '1_2_3'

function curry(fn) { //takes in a func
  return function curried(...args) { //returns a function
    if (args.length >= fn.length) { // check whether number of args is sufficient?
      return fn.apply(this, args); // call the given func and return result
    }
    return function (...otherArgs) { // else return a new function to gether more args
      return curried.apply(this, args.concat(otherArgs)); //call curried function again with all the args
    };
  };
}
