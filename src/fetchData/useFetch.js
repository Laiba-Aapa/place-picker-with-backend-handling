import { useEffect, useState } from "react";
export function useFetch(fetchfn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchfn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "failed to fetch places..." });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchfn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
