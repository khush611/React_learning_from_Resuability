import React from "react";

function ImageCallout(props) {
  return (
    <div className="callout">
      <img src={props.img} width="100%" />
      <figcaption>{props.btnText}</figcaption>
    </div>
  );
}

export default ImageCallout;
