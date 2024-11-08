function all(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let results = [];
    if (promises.length === 0) return resolve(results);
    for (let index = 0; index < promises.length; index++) {
      Promise.resolve(promises[index])
        .then((result) => {
          results[index] = result;
          count++;
          if (count === promises.length) resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}
