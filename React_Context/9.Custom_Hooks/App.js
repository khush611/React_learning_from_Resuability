/** Custom hooks can be used to simplify the three main patterns of reusability:
React children
Higher-order components
render props

By convention, custom hooks are kept in their own file which follows the naming convention useName.js.
Hooks perform the following functions:
initialize state
create any functions we need for modifying the state
return whatever we want another component to have access to (count, increment)

function useCounter() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}

	return [count, increment];
} */

/* here we are using custom hooks to separate logic from app.js and using it for presentation while
using useCounter as logical component */

import React, { useState } from "react";
import useCounter from "./useCounter";
function App() {
  const { count, increment } = useCounter(); //note
  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}

export default App;
