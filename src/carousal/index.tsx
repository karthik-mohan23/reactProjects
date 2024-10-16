import { useEffect, useRef, useState } from "react";

const ImageList = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1728649054288-61f332ee389b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1728785954407-03ded8e30ff3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://plus.unsplash.com/premium_photo-1721950049140-07342cbc98db?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1728662741301-f55da8c30a5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  let timer = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      handleNextImage();
    }, 3000);

    return () => {
      // console.log("cleared timer", timer);
      clearInterval(timer.current);
    };
  }, [currentIndex]);

  const handleNextImage = () => {
    let nextIndex = currentIndex;
    if (currentIndex >= ImageList.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex += 1;
    }
    setCurrentIndex(nextIndex);
  };
  const handlePrevImage = () => {
    let prevIndex = currentIndex;
    if (currentIndex <= 0) {
      prevIndex = ImageList.length - 1;
    } else {
      prevIndex -= 1;
    }
    setCurrentIndex(prevIndex);
  };

  console.log(currentIndex);

  return (
    <div className="min-h-screen">
      <div className="w-full relative h-[75vh]">
        <img
          src={ImageList[currentIndex]?.url}
          alt="carousal image"
          className="w-full h-full object-cover"
          onMouseEnter={() => clearInterval(timer.current)}
          // onMouseLeave={() => setCurrentIndex((prev) => prev + 1)}
          onMouseLeave={() => {
            timer.current = setInterval(() => {
              handleNextImage();
            }, 3000);
          }}
        />
        <button
          onClick={handleNextImage}
          className="bg-black text-white p-4 rounded-lg absolute top-1/2 right-0 -translate-y-1/2">
          next
        </button>
        <button
          onClick={handlePrevImage}
          className="bg-black text-white p-4 rounded-lg absolute top-1/2 left-0 -translate-y-1/2">
          prev
        </button>
      </div>
    </div>
  );
}
export default Carousal;
