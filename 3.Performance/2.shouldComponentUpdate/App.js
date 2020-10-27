{
  /*try remmoving count from the grandparent comp. it will only rerender
app since grandparent is not updating hence it along with its children are not  updating and rerendering */
}
import React, { Component } from "react";
import GrandParent from "./GrandParent";

class App extends Component {
  state = { count: 0 };

  increment = () =>
    this.setState((prevState) => ({ count: prevState.count + 1 }));

  render() {
    console.log("[GP] [P] [C] [GC] APP just rendered");
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <h2>{this.state.count}</h2>
        <p>I'm the App component</p>
        <GrandParent count={this.state.count} />
        <GrandParent count={this.state.count} />
      </div>
    );
  }
}

export default App;
