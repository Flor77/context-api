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
      <p>
        This is about props. How we can use props to manage state of our
        application and solve the problem of props drilling in React. How we can
        create context and than providing the context to child components.
      </p>
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
