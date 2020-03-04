export const createStore = (reducer, initialState) => {
  let currentState = initialState;
  let listeners = [];

  const getState = () => currentState;
  const dispatch = action => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = fn => {
    listeners = [...listeners, fn];
    return () => {
      listeners = listeners.filter(listner => listner !== fn);
    };
  };

  return { getState, dispatch, subscribe };
};
