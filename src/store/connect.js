import React, { useContext, useEffect, useState, useCallback } from "react";
import { SlomuxContext } from "../components/provider";

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  const WrappedComponent = props => {
    const store = useContext(SlomuxContext);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
      const unsubscribeFn = store.subscribe(forceUpdate);
      return () => unsubscribeFn();
    }, []);

    return (
      <Component
        {...props}
        {...mapStateToProps(store.getState(), props)}
        {...mapDispatchToProps(store.dispatch, props)}
      />
    );
  };

  return WrappedComponent;
};
