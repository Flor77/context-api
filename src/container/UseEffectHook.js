import React, { useState } from "react";
import CCompUseEffect from "./components/CCompUseEffect";
import FCompUseEffect from "./components/FCompUseEffect";

const UseEffectHook = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div className="platforms flex-col">
      <p>
        <br />
        Each component in React has a lifecycle which you can monitor and
        manipulate during its three main phases.
        <br />
        Mounting means putting elements into the DOM. The componentDidMount()
        method is called after the component is rendered. This is where you run
        statements that requires that the component is already placed in the
        DOM.
        <br />A component is updated whenever there is a change in the
        component's state or props.
        <br />
        We can use the useEffect hook for doing the side effects for all those
        we can do in the class component and in lifecycle, all those side
        effects can be done with the help of the use UseEffect
      </p>

      <div className="wrapper-app">
        <h3>UseEffect Hook Examples</h3>
        <button className="primary-button" onClick={() => setFlag(!flag)}>
          Toggle Function Component
        </button>
        <hr className="line"></hr>
        {flag ? <FCompUseEffect /> : <CCompUseEffect />}
      </div>
    </div>
  );
};

export default UseEffectHook;
