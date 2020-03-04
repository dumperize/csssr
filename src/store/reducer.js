import { CHANGE_INTERVAL } from "./listActions";

const initialState = {
  interval: 1
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INTERVAL:
      const newInterval =
        state.interval + action.payload > 0
          ? state.interval + action.payload
          : 0;
      return { ...state, interval: newInterval };
  }
  return state;
}

export { reducer, initialState };
