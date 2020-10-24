import React, { Component } from "react";
import { ThemeContextConsumer } from "./themeContext"; //only importing consumer
function Header(props) {
  return (
    <ThemeContextConsumer>
      {/*not using dot notation*/}
      {(theme) => (
        <header className={`${theme}-theme`}>
          <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
