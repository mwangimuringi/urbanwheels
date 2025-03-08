import { useState, useEffect } from "react";

const useWindowSize = (
  options: AddEventListenerOptions = { passive: true }
) => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200);
    };

    window.addEventListener("resize", handleResize, options);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize, options);
    };
  }, [options]);

  return windowSize;
};

export default useWindowSize;
