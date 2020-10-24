import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "./themeContext";
//button component need to be changed back to normal. and passing props is a must.
//It is induced with consumer in the app itself
function Button(props) {
  return <button className={`${props.theme}-theme`}>Switch Theme</button>;
}
//so that user chooses a theme among these two only
Button.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"])
};
//incase user forgets to give theme prop
Button.defaultProps = {
  theme: "light"
};
export default Button;
