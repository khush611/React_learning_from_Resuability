/** React.PureComponent requires the use of class components.

React.memo() is a version of `React.
PureComponent which can be used with functional components.

React.memo() is a higher-order component which only compares prevProps 
and nextProps (it doesn't check state).

Unlike shouldComponentUpdate(), `React.memo() returns true 
if the component should re-render.

export default React.memo(Component); */

//on clicking the count button you can see the log and also try to change the props and set pure component to chidren
//to see what's being rendered.
//All components use React.memo(). You can use React.memo to child which
//dont want to render on parent's updation.
//React.memo can use used at top and bottom. see GC component to see top React.memo

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
        {/*1.you can set count here to both grandparent to see 31 logs
        meaning the components are being rerendered.
         2. you can also set count to either one of the grandparent to see
         that 16 logs are shown i.e. one branches on one grandparent is rerendered.
         3. you u remove count from both and send a static prop,like 
         blah="hello", then only app will be rerendered since children are not updated.
         4.if u are sending count to GP, but dont want its children to rerendered then make
         its immediate child use pure component. */}
        <GrandParent count={this.state.count} />
        <GrandParent />
      </div>
    );
  }
}

export default App;
