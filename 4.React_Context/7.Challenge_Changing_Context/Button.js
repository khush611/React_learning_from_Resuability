import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Button(props) {
  return (
    <ThemeContextConsumer>
      {(
        themeObj //taking out theme and function out of object
      ) => (
        <button className={`${themeObj.theme}-theme`} onClick={themeObj.toggle}>
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
