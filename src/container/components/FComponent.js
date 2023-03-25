import React from "react";

const FComponent = ({ counter }) => {
  return (
    <div className="wrapper-app">
      <h1>Function Component</h1>
      <h3>{counter}</h3>
      <hr className="line"></hr>
      <FChild counter={counter} />
    </div>
  );
};

const FChild = ({ counter }) => {
  return (
    <div className="wrapper-app">
      <h1>Child Component</h1>
      <h3>{counter}</h3>
      <hr className="line"></hr>
    </div>
  );
};

export default FComponent;
