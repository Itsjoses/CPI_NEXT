import React from "react";
import ThemeComponent from "./themeComponent";
import UserComponent from "./userComponent";

export default function DatabaseComponents({ children }) {
  return (
    <UserComponent>
      <ThemeComponent>{children}</ThemeComponent>
    </UserComponent>
  );
}
