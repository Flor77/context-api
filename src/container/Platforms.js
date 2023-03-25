import React from "react";
import CComponent from "./components/CComponent";
import FComponent from "./components/FComponent";

const Platforms = () => {
  return (
    <div className="platforms flex-col">
      <div className="wrapper-app">
        <h3>App Component</h3>
        <hr className="line"></hr>
        <FComponent />
        <CComponent />
      </div>
    </div>
  );
};

export default Platforms;
