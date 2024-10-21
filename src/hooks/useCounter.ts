import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return { count, incrementCount };
}
export default useCounter;
