import React from "react";
import Parent from "./Parent";
//props are optional
function GrandParent(props) {
  console.log("[👴🏼]   [ ]   [ ]   [ ] rendered");
  return (
    <div>
      <p>I'm a GrandParent Component</p>
      <Parent />
      <Parent />
    </div>
  );
}

export default React.memo(GrandParent);
//if u want to use your own checking function,you can use it like this :-
// function areEqual(prevProps, nextProps) {
//   /*
//   return true if passing nextProps to render would return
//   the same result as passing prevProps to render,
//   otherwise return false
//   */
// }

// export default React.memo(GrandParent, areEqual);
