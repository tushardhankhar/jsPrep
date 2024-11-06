function throttle(fn, delay) {
  let trigger = true;
  return function (...args) {
    if (trigger) {
      fn.apply(this, args);
      trigger = false;
    }
    setTimeout(() => {
      trigger = true;
    }, delay);
  };
}
