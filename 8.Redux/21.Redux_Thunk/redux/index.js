import redux, { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//only using dispatch parameter->
// export function increment() {
//  Suppose you are using an API call to get the current count
//     // return function that takes dispatch as a parameter
//     return (dispatch)=>{
//         setTimeout(()=>{
//            dispatch({type:"INCREMENT"})
//         },1500)
//     }
// }
//only using getState parameter->
export function increment() {
  // return function that takes dispatch as a parameter
  return (dispatch, getState) => {
    const currentCount = getState();
    if (currentCount % 2 === 0) {
      dispatch({ type: "INCREMENT" });
    } else {
      setTimeout(() => {
        dispatch({ type: "INCREMENT" });
      }, 1500);
    }
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

const store = createStore(reducer, applyMiddleware(thunk)); // https://github.com/reduxjs/redux-thunk#installation
store.subscribe(() => console.log(store.getState()));
export default store;
