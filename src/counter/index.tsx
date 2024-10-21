import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, incrementCount } = useCounter(0);

  return (
    <div>
      Counter
      <h3>{count}</h3>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
export default Counter;
