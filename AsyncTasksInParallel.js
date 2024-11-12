function parallel(asyncFunctions) {
  return function (finalCallback, inputData) {
    let hasErrorOccured = false;
    let completed = 0;
    let results = [];
    asyncFunctions.forEach((asyncFunction) => {
      asyncFunction((error, data) => {
        if (hasErrorOccured) return;
        if (error) {
          hasErrorOccured = true;
          finalCallback(error, undefined);
          return;
        }
        results[index++] = data;
        completed += 1;
        if (completed === asyncFunction.length) {
          finalCallback(undefined, results);
        }
      }, inputData);
    });
  };
}
