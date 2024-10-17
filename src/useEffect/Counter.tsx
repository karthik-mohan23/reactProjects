import { useEffect, useState } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);

  console.log("on render, count - ", count);

  useEffect(() => {
    console.log("inside useEffect");
    const timer = setInterval(() => {
      console.log(count, "inside setInterval");
      setCount(count + 1);
    }, 2000);

    if (count === 2) {
      clearInterval(timer);
      return;
    }

    return () => {
      console.log("inside useEffect return");
      clearInterval(timer);
    };
  }, [count]);

  console.log("inside jsx");
  return (
    <div>
      <h1 className="text-center py-24">UseEffectCounter</h1>
      <p className="text-center">{count}</p>
    </div>
  );
}
export default UseEffectCounter;
