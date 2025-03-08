import { useState, useEffect, useMemo } from "react";

const useWindowSize = (
  options: AddEventListenerOptions = { passive: true }
) => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      let timeoutId: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }, 100);
      };

      window.addEventListener("resize", handleResize, options);
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", handleResize, options);
      };
    }
  }, [options]);

  return useMemo(() => windowSize, [windowSize.width, windowSize.height]);
};

export default useWindowSize;
