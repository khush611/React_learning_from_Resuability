import React from "react";
import CTA from "./CTA";
import "./styles.css";

function App() {
  return (
    /* sending text from parent to child via props */
    <div>
      <CTA>
        <h1>This is an important CTA (CALLED OUT ACTION)</h1>
        <button>Click me now or you'll miss out!</button>
      </CTA>

      <CTA>
        <form>
          <input type="email" placeholder="Enter email address here" />
          <br />
          <button>Submit</button>
        </form>
      </CTA>
    </div>
  );
}

export default App;
