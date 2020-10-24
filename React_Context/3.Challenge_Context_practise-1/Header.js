import React, { Component } from "react";
import UserContext from "./userContext";
class Header extends Component {
  static contextType = UserContext;
  render() {
    return (
      <header>
        <p>Welcome, {this.context}!</p>
      </header>
    );
  }
}
export default Header;
