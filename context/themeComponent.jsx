import { fontColor } from "@/globalValue/font";
import { iconColor, themeColor } from "@/globalValue/themeColor";
import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeFunctionContext = createContext();

export const IconContext = createContext();
export const FontContext = createContext();

export default function ThemeComponent({ children }) {
  const [theme, setTheme] = useState(themeColor.light);
  const [icon, setIcon] = useState(iconColor.light);
  const [font, setFont] = useState(fontColor.light);

  function changeTheme() {
    if (theme == themeColor.light) {
      setTheme(themeColor.dark);
      setIcon(iconColor.dark);
      setFont(fontColor.dark);
    } else {
      setTheme(themeColor.light);
      setIcon(iconColor.light);
      setFont(fontColor.light);
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeFunctionContext.Provider value={changeTheme}>
        <IconContext.Provider value={icon}>
          <FontContext.Provider value={font}>{children}</FontContext.Provider>
        </IconContext.Provider>
      </ThemeFunctionContext.Provider>
    </ThemeContext.Provider>
  );
}
