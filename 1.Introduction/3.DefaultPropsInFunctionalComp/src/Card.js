import React from "react";

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width
  };

  return <div style={styles}></div>;
}

Card.defaultProps = {
  cardColor: "blue",
  height: "100px",
  width: "100px"
};

export default Card;
