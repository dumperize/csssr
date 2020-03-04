import React from "react";
import { connect } from "../store/connect";
import Interval from "./interval";

const TIMER_STEP = 1000;

const Timer = ({ interval }) => {
  const [time, setTime] = React.useState(0);
  const [delay, setDelay] = React.useState(TIMER_STEP * interval);
  const [isRunning, setIsRunning] = React.useState(false);

  React.useEffect(() => {
      setDelay(TIMER_STEP * interval)
  }, [interval]);

  useInterval(
    () => {
      setTime(time + interval);
    },
    isRunning ? delay : null
  );

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <Interval />
      <div>Секундомер: {time} сек.</div>
      <div>
        <button onClick={handleStart}>Старт</button>
        <button onClick={handleStop}>Стоп</button>
      </div>
    </div>
  );
};

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest function.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const mapStateToProps = state => {
  return {
    interval: state.interval
  };
};

export default connect(mapStateToProps, () => {})(Timer);
