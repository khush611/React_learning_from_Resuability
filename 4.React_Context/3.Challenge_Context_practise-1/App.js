import React from "react";
import "./styles.css";
import UserContext from "./userContext";
import Header from "./Header";
//changes functional App to class Component
class App extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <Header />
        <main>
          <p className="main">No new notifications, {this.context}! 🎉</p>
        </main>
      </div>
    );
  }
}
export default App;
