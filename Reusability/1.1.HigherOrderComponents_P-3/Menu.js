import React from "react";

class Menu extends React.Component {
  state = {
    clicked: true
  };

  toggleShow = () => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.clicked ? "Hide" : "Show"} Menu
        </button>
        <nav style={{ display: this.state.clicked ? "block" : "none" }}>
          <h6>Signed in as Coder123</h6>
          <a>Your Profile</a>
          <a>Your Repositories</a>
          <a>Your Stars</a>
          <a>Your Gists</a>
        </nav>
      </div>
    );
  }
}
export default Menu;
