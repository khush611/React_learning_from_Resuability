import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";

import { Switch, Route } from "react-router-dom";

import Settings from "./pages/profile/Settings";
import Info from "./pages/profile/Info";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/profile/info" exact>
          <Info />
        </Route>
        <Route path="/profile/settings" exact>
          <Settings />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
