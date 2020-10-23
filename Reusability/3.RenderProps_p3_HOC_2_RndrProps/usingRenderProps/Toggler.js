import React, { Component } from "react";
//deleting withToggler function.
//instead using toggler comp to call render fn
//and sending props while calling render fn
class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue
  };
  static defaultOnValue = {
    on: false
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      };
    });
  };

  render() {
    return <div>{this.props.render(this.state.on, this.toggle)}</div>;
  }
}

export default Toggler;
