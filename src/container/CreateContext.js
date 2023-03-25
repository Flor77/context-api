import React, { useState } from "react";
import CComponentCounterContext from "./components/CComponentCounterContext";
import { CounterContext } from "./components/CounterContext";
import FComponentContextProvider from "./components/FComponentContextProvider";

const CreateContext = () => {
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
        This is about React Hook useContext. How we can use useContext hook to
        to manage state of our application and solve the problem of props
        drilling in React. How we can create context and than providing the
        context to child components.How to consume the context value in class
        component and in function component.
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

        <CounterContext.Provider value={{ counter, setCounter }}>
          <FComponentContextProvider />
        </CounterContext.Provider>
      </div>
    </div>
  );
};

export default CreateContext;
