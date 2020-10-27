/**A brief look at how to use the <Link> component to link a homepage to an about page:
<Link to="/">Home</Link>
<Link to="/about">About</Link>
 */

import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
