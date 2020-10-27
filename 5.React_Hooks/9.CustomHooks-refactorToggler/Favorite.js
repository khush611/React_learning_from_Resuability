import React, { Component } from "react";
import Toggler from "./Toggler";
import useToggler from "./useToggler";

function Favorite(props) {
  const [isfav, toggle] = useToggler(false);
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{isfav ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
}

export default Favorite;
