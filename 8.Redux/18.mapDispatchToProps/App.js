import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/index";
//main focus on this page
function App(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default connect(state => ({count: state}), {increment, decrement})(App)
//the above line 26 is the simplied version of line 25
