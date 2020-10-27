//everything is same as 15.react_redux_and_Provider except the app.js

import React from "react";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <h1>COUNT GOES HERE</h1>
      <button>-</button>
      <button>+</button>
    </div>
  );
}

export default connect(/* What parts of state do you want? , What actions to dispatch? */)(
  App
);
