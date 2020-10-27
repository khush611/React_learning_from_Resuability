//not working on changing the route path from "/profile" to anything else.
//hence the purpose of useroutematch dissolves in this app.
//dont use

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          {/**note */}
          <Profile />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
