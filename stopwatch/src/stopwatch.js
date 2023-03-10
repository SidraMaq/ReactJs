import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    //when "isRunning" is true
    if (isRunning) {
      //setInterval function is called with a callback function
      intervalId = setInterval(() => {
        //updates the "elapsedTime" state variable every 10 milliseconds by adding 10 to its previous value
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
      }, 10);
    }
    // setInterval function returns an ID that is saved in the "intervalId" variable.
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStopClick = () => {
    //if current value of isRunning false it will update to true
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  //this function sets the value of both "isRunning" and "elapsedTime" state variables to their initial values.
  const handleResetClick = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  //this function takes time in milliseconds as input and return
  //a formated time MM:SS.mm
  const formatTime = (timeInMillis) => {
    //Calculates the number of minuts , seconds and miliseconds based on input
    const minuts = Math.floor(timeInMillis / 60000);
    const seconds = Math.floor((timeInMillis % 60000) / 1000);
    const milliseconds = Math.floor((timeInMillis % 1000) / 10);
    //converts these values into strings and pads them with leading zeros
    //if necessary using the "padStart" method.
    return `${minuts.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>
        Build a stopwatch application using the useState and useEffect hooks,
        which displays the elapsed time when a user clicks start and stop
      </p>
      <p>{formatTime(elapsedTime)}</p>
      <button onClick={handleStartStopClick}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleResetClick}>Reset</button>
    </>
  );
}
export default Stopwatch;
