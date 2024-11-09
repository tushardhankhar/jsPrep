let counter = 0;
const callBacksToBeExecuted = {};

function mySetTimeout(fn, delay) {
  const currentCounter = counter++;
  callBacksToBeExecuted[currentCounter] = {
    callback: fn,
    time: Date.now() + delay,
  };
  return currentCounter;
}

function myClearTimeout(timer) {
  if (callBacksToBeExecuted[timer]) {
    delete callBacksToBeExecuted[timer];
  }
}

function processCallback() {
  const now = Date.now();
  let hasPendingCallbacks = false;

  Object.keys(callBacksToBeExecuted).forEach((key) => {
    if (now > callBacksToBeExecuted[key].time) {
      const { callback } = callBacksToBeExecuted[key];
      callback();
      delete callBacksToBeExecuted[key]; // Remove the executed callback
    } else {
      hasPendingCallbacks = true; // If any callback is still pending, we re-trigger
    }
  });

  if (hasPendingCallbacks) {
    requestIdleCallback(processCallback);
  }
}

requestIdleCallback(processCallback);

// Usage example:
const timerId = mySetTimeout(() => {
  console.log("hello after 1 second");
}, 1000);

myClearTimeout(timerId); // Clears the timeout, so "hello" will not be logged
