import { useState, useEffect, useCallback } from "react";

const useFetch = <T>(
  url: string,
  retries: number = 3,
  retryDelay: number = 1000 // Delay in milliseconds between retries
): { data: T | null; error: string | null; isLoading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [attempts, setAttempts] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result: T = await response.json();
      setData(result);
    } catch (error: any) {
      if (attempts < retries) {
        setTimeout(() => setAttempts((prev) => prev + 1), retryDelay);
      } else {
        setError(error.message);
      }
    } finally {
      if (attempts >= retries) {
        setIsLoading(false);
      }
    }
  }, [url, attempts, retries, retryDelay]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading };
};

export default useFetch;
