//using thunk to call an api

import redux, { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export function increment() {
  return (dispatch, getState) => {
    const number = getState();
    const url = "https://swapi.dev/api/people";
    fetch(`${url}/${number}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "INCREMENT" });
      });
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

function reducer(count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;
