//all files are same as 18.mapDispatchToProps except this:
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux";

function App(props) {
  const count = useSelector((state) => state);
  const dispatch = useDispatch(); //note
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/**note */}
      <button onClick={() => dispatch(increment())}>+</button>
      {/**note */}
    </div>
  );
}

export default App;

//
