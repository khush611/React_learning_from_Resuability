//The React documentation suggests using React.PureComponent
//instead of trying to implement `shouldComponentUpdate().
//React.PureComponent is an alternative to React.Component.
//import React, { PureComponent } from "react";

//pure component is used to replace componentShouldUpdate as it automatically calls it.
//it is used in class component

//pure component is used instead of component to see if their is any rerender/update is required in the component.
//on clicking the count button you can see the log and also try to change the props and set pure component to chidren
//to see what's being rendered.
//Parent and Grandparent here extends PureComponent.
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
