import { useState, useEffect } from "react";

const useFetch = <T>(
  url: string
): { data: T | null; error: string | null; isLoading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return { data, error, isLoading };
};

export default useFetch;
