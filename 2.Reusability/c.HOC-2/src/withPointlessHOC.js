import React from "react";

function withPointlessHOC(component) {
  const Component = component;
  return function (props) {
    return <Component {...props} />;
  };
}
export default withPointlessHOC;
