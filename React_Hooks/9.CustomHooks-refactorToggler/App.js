/**Now we'll apply our knowledge of custom hooks to a slightly more realistic example - a toggle. The task is broken down into more manageable chunks for you to work through:
Create the state
Create a function for easily flipping the isToggledOn value
Return something useful for whatever component will be using this hook

Finally, we'll refactor our existing components so that they use our new custom hook. */

/**
 * custom hook is used for resuablity. if any part is reused by multiple comps, then use custom hooks
 */
import React from "react";
import Menu from "./Menu";
import Favorite from "./Favorite";

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Favorite />
    </div>
  );
}

export default App;
