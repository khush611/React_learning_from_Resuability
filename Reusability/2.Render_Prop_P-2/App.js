import React from "react";
import Example from "./Example";

function App() {
  return (
    //below "render" is a variable and can be named anything
    <Example
      render={function (name, number, bool) {
        return (
          <div>
            <h1>Hi, {name}</h1>
            <button>{number}</button>
            <h2>{bool ? "true" : "false"}</h2>
          </div>
        );
      }}
    />
  );
}

export default App;
