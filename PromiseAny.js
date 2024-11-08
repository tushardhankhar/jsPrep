function any(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const errors = [];

    if (promises.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((result) => {
          resolve(result); // Resolve immediately with the first fulfilled promise
        })
        .catch((err) => {
          errors[i] = err; // Capture the rejection reason
          count++;
          if (count === promises.length) {
            const aggregateError = new AggregateError(
              errors,
              "All promises were rejected"
            );
            aggregateError.errors = errors; // Add an errors property for Jasmine compatibility
            reject(aggregateError);
          }
        });
    }
  });
}
