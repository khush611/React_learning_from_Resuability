import React from "react";
/* all children will have class border and hence the styles.*/
function CTA(props) {
  return <div className="border">{props.children}</div>;
}

export default CTA;
