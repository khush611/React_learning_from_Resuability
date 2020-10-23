import React, { Component } from "react";
import Toggler from "./Toggler";
//notice that favorite is not setting defaultOnValue.
//For favorite comp, defaultProp is used in Toggler to set on to false
function Favorite(props) {
  return (
    //using render prop.taking values from function called by toggler comp
    <Toggler
      render={function (on, toggle) {
        return (
          <div>
            <h3>Click heart to favorite</h3>
            <h1>
              <span onClick={toggle}>{on ? "❤️" : "♡"}</span>
            </h1>
          </div>
        );
      }}
    />
  );
}

export default Favorite;
