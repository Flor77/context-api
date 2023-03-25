import React, { useState } from "react";
import CComponent from "./components/CComponent";
import FComponent from "./components/FComponent";

const Props = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="platforms flex-col">
      <div className="wrapper-app">
        <h3>App Component</h3>
        <h2>{counter}</h2>
        <div className="row">
          <button className="secondary-button" onClick={increment}>
            Increment
          </button>
          <button className="secondary-button" onClick={reset}>
            Reset
          </button>
          <button className="secondary-button" onClick={decrement}>
            Decrement
          </button>
        </div>
        <hr className="line"></hr>
        <FComponent counter={counter} />
        <CComponent counter={counter} />
      </div>
    </div>
  );
};

export default Props;
