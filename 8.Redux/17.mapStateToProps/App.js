//everything is same as 15.react_redux_and_Provider except the app.js

import React from "react";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button>-</button>
      <button>+</button>
    </div>
  );
}

function mapStateToProps(globalState) {
  return {
    count: globalState
  };
}

export default connect(mapStateToProps, {})(App);
