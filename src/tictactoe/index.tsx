import { useState } from "react";

function TicTacToe() {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [icon, setIcon] = useState("X");
  // const boxes = ["", "", "", "", "", "", "", "", ""];

  return (
    <div>
      <h1 className="text-center text-3xl  py-20">TicTacToe</h1>
      <div className="grid grid-cols-3  max-w-36 mx-auto">
        {boxes.map((box, index) => (
          <div
            className="border border-black p-2 h-10 text-center"
            onClick={() => {
              if (box) {
                return;
              }
              boxes[index] = icon;
              setIcon((prev) => (prev === "X" ? "O" : "X"));
            }}>
            {box}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TicTacToe;
