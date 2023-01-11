import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Dark");
  const [selectedTheme, setSelectedTheme] = useState("bg-gray-700 text-white ")
  const values = {
    theme,
    setTheme,
    selectedTheme,
    setSelectedTheme
  };
  
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
