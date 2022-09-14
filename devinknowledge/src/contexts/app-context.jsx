import React, { useState } from "react";

const appContext = React.createContext(null);

const ContextProvider = appContext.Provider;

export const useAppContext = () => {
  const context = React.useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [allTips, setAllTips] = useState([]);
  const [filter, setFilter] = useState(null);

  const createTip = (tip) => {
    setAllTips((prev) => [...prev, tip]);
  };

  const filterTips = (query) => {
    if (query) {
      setFilter(query);
    } else {
      setFilter(null);
    }
  };

  const tips = filter
    ? allTips.filter((tip) => tip.titulo.includes(filter))
    : allTips;
  return (
    <ContextProvider value={{ createTip, filterTips, tips }}>
      {children}
    </ContextProvider>
  );
};
