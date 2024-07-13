import { useState, useEffect } from "react";

const StopWatch = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSecond(second + 1);
      }, 1000);
      if (second > 60) {
        setMinute(minute + Math.floor(second / 60));
        setSecond(second % 60);
      }
    }
    return () => clearInterval(intervalId);
  }, [isRunning, second]);

  const startStop = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  const reset = () => {
    setSecond(0);
    setMinute(0);
    setIsRunning(false);
  };

  const commonStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <div style={(commonStyles, { flexDirection: "column" })}>
      <h3 style={{ textAlign: "center" }}>
        {minute}:{second}
      </h3>
      <div
        style={(commonStyles, { flexDirection: "row", textAlign: "center" })}
      >
        <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        {isRunning ? (
          <button style={{ marginLeft: "10px" }} onClick={reset}>
            Reset
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
