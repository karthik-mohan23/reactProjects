import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
// import useDebounce from "../hooks/useDebounce";

function DebounceComponent() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);

  const debouncedVal = useDebounce(inputVal);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    getData();
  }, [debouncedVal]);

  return (
    <div>
      DebounceComponent
      <div>
        <input
          placeholder="input"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
        />
      </div>
    </div>
  );
}
export default DebounceComponent;
