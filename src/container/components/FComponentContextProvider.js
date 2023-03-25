import React, { useContext } from "react";
import CreateContext from "../CreateContext";
import { CounterContext } from "./CounterContext";

const FComponentContextProvider = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="wrapper-app">
      <h1>Function Component</h1>
      <h3>{counter}</h3>
      <button
        className="secondary-button"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <hr className="line"></hr>
      <FChild />
    </div>
  );
};

const FChild = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div className="wrapper-app">
      <h1>Child Component</h1>
      <h3>{counter}</h3>
      <button
        className="secondary-button"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <hr className="line"></hr>
    </div>
  );
};

export default FComponentContextProvider;
