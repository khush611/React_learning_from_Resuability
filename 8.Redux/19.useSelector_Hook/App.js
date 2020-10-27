//all files are same as 18.mapDispatchToProps except this:
import React from "react";
import { useSelector } from "react-redux"; //note
import { increment, decrement } from "./redux";

function App(props) {
  const count = useSelector((state) => state); // if u want a particular state then
  //you can do (state)=>state.favoriteThing in the brackets above
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  );
}

// export default connect(state => ({count: state}), {increment, decrement})(App)
export default App;
