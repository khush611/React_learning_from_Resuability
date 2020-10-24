import React, { Component } from "react";
import ThemeContext from "./themeContext";
class Header extends Component {
  static contextType = ThemeContext; //you can do it like this
  render() {
    return (
      <header className={`${this.context}-theme`}>
        <h2>Light Theme</h2>
      </header>
    );
  }
}

export default Header;
