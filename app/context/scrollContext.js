"use client";
import { useContext, createContext, useState } from "react";

const ScrollContext = createContext({
  scroll: false,
  setScroll: () => {},
});

const themeContext = createContext({
  isDark: false,
  setDark: () => {},
});

export const ScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  const [isDark, setDark] = useState(false);
  return (
    <ScrollContext.Provider value={{ scroll, setScroll, isDark, setDark }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
export const useTheme = () => useContext(themeContext);
