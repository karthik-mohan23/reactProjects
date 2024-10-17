import { useEffect, useRef, useState } from "react";

function ProgressBar() {
  const [step, setStep] = useState(0);
  console.log("step", step);
  const timerId = useRef(0);

  useEffect(() => {
    timerId.current = setInterval(() => {
      //   console.log("inside timer", step);
      setStep((prev) => {
        if (prev >= 100) {
          clearInterval(timerId.current);
          return prev;
        }
        return prev + 10;
      });
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return (
    <div>
      <h1 className="text-center py-20">Progress Bar</h1>
      <div className="max-w-80 mx-auto border border-black rounded-full h-10 relative overflow-hidden">
        <div
          className="absolute w-full h-full bg-green-500"
          style={{
            transform: `translateX(${step - 100}%)`,
          }}
        />
      </div>
    </div>
  );
}
export default ProgressBar;
