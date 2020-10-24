import React from "react";
import PropTypes from "prop-types";
import { ThemeContextConsumer } from "./themeContext"; //only importing consumer

function Button(props) {
  return (
    <ThemeContextConsumer>
      {/*not using dot notation*/}
      {(theme) => <button className={`${theme}-theme`}>Switch Theme</button>}
    </ThemeContextConsumer>
  );
}

export default Button;
