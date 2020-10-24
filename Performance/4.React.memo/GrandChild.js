import React, { Component } from "react";
//you can use React.memo at the top like this:-
export default React.memo(function GrandChild() {
  console.log("[ ]   [ ]   [ ]   [👶🏻] rendered");
  return (
    <div>
      <p>I'm a GrandChild Component</p>
    </div>
  );
});
