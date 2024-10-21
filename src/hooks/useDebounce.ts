import { useEffect, useRef, useState } from "react";

function useDebounce(initialValue: string, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const timerId = useRef<number>(0);

  useEffect(() => {
    timerId.current = setTimeout(() => {
      setDebouncedValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [initialValue]);

  return debouncedValue;
}
export default useDebounce;
