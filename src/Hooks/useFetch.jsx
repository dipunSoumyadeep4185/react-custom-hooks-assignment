import { useState, useEffect, useCallback } from "react";

function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {

    try {
      setLoading(true);

      const response = await fetch(url);
      const result = await response.json();

      // delay showing data
      setTimeout(() => {
        setData(result);
        setLoading(false);
      }, 6000); // 6 seconds

    } 
    catch (err) {
      setTimeout(() => {
        setError("Error: Failed to Fetch...");
        setLoading(false);
      }, 6000);
    }

  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

export default useFetch;