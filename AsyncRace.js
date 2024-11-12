function race(asyncFunctions) {
    return function (finalCallback, inputData) {
      let isSettled = false; // Flag to ensure only the first result/error is used
  
      asyncFunctions.forEach((asyncFunc) => {
        asyncFunc((error, data) => {
          if (!isSettled) {
            isSettled = true; // Mark as settled to ignore future calls
            finalCallback(error, data);
          }
        }, inputData);
      });
    };
  }
  