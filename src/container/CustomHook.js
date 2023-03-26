import useCounter from "../hooks/useCounter";
import ScreenComponent from "./components/ScreenComponent";

const CustomHook = () => {
  const [counter, increment, decrement, reset] = useCounter(0);

  return (
    <div className="platforms flex-col">
      <p>
        How to write a Custom React Hook. There are two different examples and
        write custom hook and see how we can use it in our components. Custom
        Hooks are very useful to extract the logic from component and can be
        reused in any component throughout the application.
      </p>
      <div className="wrapper-app">
        <h3>Custom Hook Examples</h3>
        <h2>{counter}</h2>
        <div className="row">
          <button className="secondary-button" onClick={increment}>
            Increment
          </button>
          <button className="primary-button" onClick={reset}>
            Reset
          </button>
          <button className="secondary-button" onClick={decrement}>
            Decrement
          </button>
        </div>
        <div className="wrapper-app">
          <ScreenComponent />
        </div>
      </div>
    </div>
  );
};

export default CustomHook;
