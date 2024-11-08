function allSettled(promises) {
    return new Promise((resolve, reject) => {
      let results = []
      let count = 0
      if (promises.length === 0) {
        resolve([]);
      }
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then((promise) => {
          results[i] = {
            status: "fulfilled",
            value: promise
          }
        }).catch((err) => {
          results[i] = {
            status: "rejected",
            reason: err
          }
  
        }).finally(() => {
          count++
          if (count === promises.length) resolve(results)
        })
      }
    })
  }
  