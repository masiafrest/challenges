import { useEffect, useRef } from "react";

export function useInterval(cb, delay) {
  const savedCbRef = useRef();

  useEffect(() => {
    savedCbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    function tick() {
      savedCbRef.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [cb, delay]);
}
