function myFinally(promise, onFinally) {
    return Promise.resolve(promise)
      .then(
        (result) =>
          Promise.resolve(onFinally()).then(() => result), // Wait for onFinally, then return the result
        (error) =>
          Promise.resolve(onFinally()).then(() => { throw error; }) // Wait for onFinally, then throw the original error
      )
      .catch((error) => {
        // If onFinally itself rejects, propagate that error instead
        throw error;
      });
  }
  