import { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [number, setNumber] = useState(0);

  //   let timer = 0;
  const timer = useRef(0);
  console.log(`timer = ${timer} & number = ${number}`);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log(timer, "timer inside setInterval");
      setNumber((prev) => prev + 1);
      //   setNumber(number + 1);
    }, 1000);

    return () => {
      console.log(timer, "timer inside return");
      clearInterval(timer.current);
    };
  }, []);

  console.log("timer in jsx", timer);
  return (
    <div>
      <h1 className="text-center text-3xl">StopWatch</h1>
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="pb-10">
          <p className="text-lg">{number}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="border border-gray-500 p-3"
            onClick={() => {
              timer.current = setInterval(() => {
                setNumber((prev) => prev + 1);
                //   setNumber(number + 1);
              }, 1000);
            }}>
            Start
          </button>
          <button
            onClick={() => setNumber(0)}
            className="border border-gray-500 p-3">
            Reset
          </button>
          <button
            onClick={() => clearInterval(timer.current)}
            className="border border-gray-500 p-3">
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
export default StopWatch;
