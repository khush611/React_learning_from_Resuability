import React from "react";
const { Provider, Consumer } = React.createContext(); //provider and consumer are extracted out of the compound object
class ThemeContextProvider extends React.Component {
  render() {
    return (
      <Provider value={"dark"}>
        {/*if not extracted then provider can be written as ThemeContext.Provider */}
        {this.props.children}
      </Provider>
    );
  }
}
export { ThemeContextProvider, Consumer as ThemeContextConsumer }; //as is used to set another name
