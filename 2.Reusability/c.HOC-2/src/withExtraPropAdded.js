import React from "react";

function withExtraPropAdded(component) {
  const Component = component;
  return function (props) {
    return (
      <Component anotherPropAdded="blah blah" {...props} /> //props can be added here
    );
  };
}
export default withExtraPropAdded;
