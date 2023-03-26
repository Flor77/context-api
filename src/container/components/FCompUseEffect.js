import React, { useEffect, useState } from "react";

const FCompUseEffect = () => {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component");

  const showDate = () => {
    setTime(new Date().toString());
  };

  useEffect(() => {
    console.log("Component Mounted or Updated");
    const interval = setInterval(showDate, 1000);

    return () => {
      console.log("Cleanup of interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div>{time}</div>
      <div className="flex-row">
        <button onClick={showDate}>Show Date</button>
        <div>{message}</div>
        <button
          className="primary-button"
          onClick={() => {
            setMessage("Changed Functional Component");
          }}
        >
          Change Message
        </button>
      </div>
    </div>
  );
};

export default FCompUseEffect;
