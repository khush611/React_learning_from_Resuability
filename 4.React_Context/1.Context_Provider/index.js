//only focus on this part
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
const ThemeContext = React.createContext();
// ThemeContext.Provider & ThemeContext.Consumer
//ThemeContext is compound component, since it is an object having some properties, some
//of which are other component
//provider and consumer are component/property of compound object themecontext
//value is a must to pass here-> that needs to be saved.
ReactDOM.render(
  <ThemeContext.Provider value={"light"}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);
