const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
const _ = curry.placeholder;
curriedJoin(1, 2, 3); // '1_2_3'
curriedJoin(_, 2)(1, 3); // '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2); // '1_2_3'

function curry(fn) {
  return function curried(...args) {
    let hasPlaceHolder = args.includes(curry.placeholder);
    let relevantArgs = args.slice(0, fn.length);
    if (args.length >= fn.length && !hasPlaceHolder) {
      return fn.apply(this, relevantArgs);
    }

    return function (...otherArgs) {
      const combinedArgs = relevantArgs.map((arg) =>
        arg === curry.placeholder && otherArgs.length ? otherArgs.shift() : arg
      );
      return curried.apply(this, combinedArgs.concat(otherArgs));
    };
  };
}

curry.placeholder = Symbol();
