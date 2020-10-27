import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/*1st way. use the more specfic path at the top. most generic the bottom*/}
      {/** <Switch>
            <Route path = "/about" render={()=><h1>about page</h1>} />
                <Route path = "/" render={()=><h1>home page </h1>} />
            </Switch>
            */}

      {/*2nd way.use exact and dont worry the order of route. note we are using render props here*/}
      {/* <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/about" render={() => <About />} />
            </Switch>*/}

      {/*3rd way using component instead of render props*/}
      {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>*/}
      {/*4th way using components as children. in this way u can send props easily*/}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
