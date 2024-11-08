function race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then((result) => resolve(result)).catch((err) => reject(err))
      }
    })
  }