import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Settings from "./Settings";
import Info from "./Info";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to="/profile/info">Profile Info</Link>
        </li>
        <li>
          <Link to="/profile/settings">Profile Settings</Link>
        </li>
      </ul>
      {/* Note: it will only work if we dont have exact for profile in our app comp. 
            so this is the first approach to nested routing. another method is to keep exact in 
            profile in app, and also shift this routing to the app comp */}
      {/*<Switch>
            <Route path="/profile/info" exact>
            <Info/>
            </Route>
            <Route path="/profile/settings" exact>
            <Settings/>
            </Route> 
            </Switch>*/}
    </div>
  );
}

export default Profile;
