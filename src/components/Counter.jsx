import React, { useState, useEffect } from 'react';
import "./counterStyle.css"
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);

  function handlePause() {
    setPause(!pause);
  }

  function handleReset() {
    setCounter(0);
    setPause(false);
  }

  useEffect(() => {
    let interval = null;
    if (pause) {
      interval = setInterval(() => {
        setCounter(counter => counter + 1);
      }, 1000);
    } else if (!pause && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [pause, counter]);

  return (
    <div className="mainDiv">
      <h1 className="counter">
        {counter}
      </h1>
      <div >
        <button className={`button button-${pause ? 'start' : 'pause'}`} onClick={handlePause}>
          {pause ? 'pause' : 'Start'}
        </button>
       <button className='button ' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;