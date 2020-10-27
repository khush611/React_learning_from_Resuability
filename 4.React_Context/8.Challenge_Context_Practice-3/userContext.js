import React from "react";

const { Provider, Consumer } = React.createContext();
class UserContextProvider extends React.Component {
  state = {
    username: "kjkj"
  };
  changeUsername = (username) => {
    this.setState({
      username: username
    });
  };
  render() {
    return (
      <Provider
        value={{
          username: this.state.username,
          changeUsername: this.changeUsername
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { UserContextProvider, Consumer as UserContextConsumer };
