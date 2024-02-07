import { createContext, useContext, useState } from "react";

const themeContext = createContext();
export const useTheme = () => useContext(themeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
