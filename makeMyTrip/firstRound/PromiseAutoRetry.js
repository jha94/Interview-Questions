function fetchWithAutoRetry(fetcher, maxCount) {
  return fetcher().catch((error) => {
    if (maxCount === 0) {
      return error;
    } else {
      return fetchWithAutoRetry(fetcher, maxCount - 1);
    }
  });
}
fetchWithAutoRetry(fetcher, maxCount);
