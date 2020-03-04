import React from "react";

export const SlomuxContext = React.createContext(null);

const Provider = ({ store, children }) => {
  return (
    <SlomuxContext.Provider value={store}>{children}</SlomuxContext.Provider>
  );
};

export default Provider;
