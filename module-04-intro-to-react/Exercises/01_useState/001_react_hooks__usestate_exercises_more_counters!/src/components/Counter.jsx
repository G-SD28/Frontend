const Counter = ({ state, setter }) => {
  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => setter(state - 1)}>-</button>
      <p>{state}</p>
      <button onClick={() => setter(state + 1)}>+</button>
    </>
  );
};
export default Counter;
