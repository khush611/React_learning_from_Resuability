// A function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it.

import React from "react";
// import {withPointlessHOC} from "./withPointlessHOC"
import withExtraPropAdded from "./withExtraPropAdded"; // you can enclose the component with or                                                                              without {}
function App(props) {
  console.log(props);
  return <div>Hello world!</div>;
}

export default withExtraPropAdded(App);
