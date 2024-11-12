// You are asked to implement an async function helper, sequence() which chains up async functions, like what pipe() does.

// All async functions have following interface

// type Callback = (error: Error, data: any) => void
// type AsyncFunc = (
//    callback: Callback,
//    data: any
// ) => void
// Your sequence() should accept AsyncFunc array, and chain them up by passing new data to the next AsyncFunc through data in Callback.

// Suppose we have an async func which just multiple a number by 2

// const asyncTimes2 = (callback, num) => {
//    setTimeout(() => callback(null, num * 2), 100)
// }
// Your sequence() should be able to accomplish this

// const asyncTimes4 = sequence(
//   [
//     asyncTimes2,
//     asyncTimes2
//   ]
// )
// asyncTimes4((error, data) => {
//    console.log(data) // 4
// }, 1)
// Once an error occurs, it should trigger the last callback without triggering the uncalled functions.

function sequence(asyncFunctions) {
  return function (finalCallback, initialData) {
    function callNext(index, data) {
      if (index > asyncFunctions.length) {
        // All functions have completed successfully
        finalCallback(undefined, data);
      }
      const currentFunction = asyncFunctions[index];
      currentFunction((error, data) => {
        if (error) {
          // If there's an error, call the final callback immediately
          return finalCallback(error, undefined);
        }
        // Pass the result to the next function in the sequence
        callNext(index + 1, data);
      }, data);
    }
    // Start the sequence with the initial data
    callNext(0, initialData);
  };
}
