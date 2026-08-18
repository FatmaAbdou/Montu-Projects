import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    // 1 Create AbortController instance for request cancellation
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        // Suppress AbortError triggered during unmount or fast parameter changes
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to fetch data');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // 2 useEffect Cleanup: Cancels pending fetch requests when URL updates
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}