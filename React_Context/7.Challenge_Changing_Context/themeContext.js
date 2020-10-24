import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 *
 */

class ThemeContextProvider extends Component {
  state = {
    theme: "dark"
  };
  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light"
      };
    });
  };
  render() {
    return (
      <Provider
        value={{
          //sending object in value
          theme: this.state.theme,
          toggle: this.toggleTheme
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
