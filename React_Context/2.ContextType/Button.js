import React, { Component } from "react";
import ThemeContext from "./themeContext";
class Button extends Component {
  render() {
    console.log(this.context);
    return <button className={`${this.context}-theme`}>Switch Theme</button>;
  }
}
Button.contextType = ThemeContext; // or you can do like this
export default Button;
