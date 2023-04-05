import { useState, useRef } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");

  const inputEl = useRef("");
  console.log(inputEl);

  const resetInput = () => {
    setName("");
    inputEl.current.focus();
  };

  return (
    <div className="platforms flex-col">
      <p>
        When I click to reset button my input field should get cleared but I
        want my focus to be shifted to input field so I need to have acces to
        DOM element which is the input element
        <br />
        How useRef hook is use for storing the previos state
        <br />
        Hold mutable value prevent re-render of component
      </p>

      <div className="wrapper-app">
        <h3>UseRef Hook Examples</h3>
        <input
          ref={inputEl}
          name="name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="primary-button " onClick={resetInput}>
          Reset
        </button>
        <h2>My name is {name}</h2>
      </div>
    </div>
  );
};

export default UseRefHook;
