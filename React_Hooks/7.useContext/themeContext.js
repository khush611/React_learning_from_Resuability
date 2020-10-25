//useContext() is a simpler way to consume data from multiple contexts.
//const context = useContext(ThemeContext);
import React, { Component } from "react";
const ThemeContext = React.createContext();

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
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContextProvider, ThemeContext };
