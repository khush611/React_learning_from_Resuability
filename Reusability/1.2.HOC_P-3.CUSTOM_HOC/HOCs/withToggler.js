// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given com

import React from "react";
class Toggler extends React.Component {
  state = {
    on: this.props.defaultOnValue
  };
  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      };
    });
  };
  render() {
    const Component = this.props.component;
    return (
      <Component toggle={this.toggle} on={this.state.on} {...this.props} />
    );
  }
}

export function withToggler(component, optionsObj) {
  return function (props) {
    return (
      <Toggler
        component={component}
        {...props}
        defaultOnValue={optionsObj.defaultOnValue}
      />
    );
  };
}
