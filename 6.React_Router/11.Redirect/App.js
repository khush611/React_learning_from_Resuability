/**The <Redirect> component changes the route automatically. This can be useful when dealing with authentication, for example by sending a user back to the login page if they fail to provide accurate login credentials:
<Redirect to="/login" />

Note: If you are simply trying to go to another location, use the <Link> element. Similarly, you can use the <History> object to push a new location if you need to programmatically push someone to a new <Route>.
 */

//here if u click private, it will redirect to login pg if not logged in after which u can see
//private page content on clicling private

import React, { useState } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/private">Private</Link>

      <Switch>
        <Route exact path="/">
          <h1>Home page, anyone is allowed here</h1>
        </Route>
        <Route path="/private">
          {isLoggedIn ? (
            <h1>Protected page, must be logged in to be here</h1>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login">
          <button onClick={() => setIsLoggedIn(true)}>Log in</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
