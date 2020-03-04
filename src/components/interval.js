import React from "react";
import { connect } from "../store/connect";
import { changeInterval } from "../store/listActions";

const Interval = ({ interval, changeInterval }) => {
  return (
    <div>
      <span>Интервал обновления секундомера: {interval} сек.</span>
      <span>
        <button onClick={() => changeInterval(-1)}>-</button>
        <button onClick={() => changeInterval(1)}>+</button>
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  interval: state.interval
});
const mapDispatchToProps = dispatch => ({
  changeInterval: value => dispatch(changeInterval(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Interval);
