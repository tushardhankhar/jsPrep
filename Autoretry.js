function fetchWithAutoRetry(fetcher, count) {
  return new Promise((resolve, reject) => {
    async function retry(attemptsLeft) {
      try {
        let result = await fetcher;
        if (result) {
          resolve(result);
        }
      } catch (error) {
        if (attemptsLeft > 0) {
          retry(attemptsLeft - 1);
        } else reject(error);
      }
    }
    retry(count);
  });
}
