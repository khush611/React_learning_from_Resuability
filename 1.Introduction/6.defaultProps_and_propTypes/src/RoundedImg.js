import React from "react";
import PropTypes from "prop-types";

function RoundedImg(props) {
  return (
    <img
      src={props.src}
      style={{ borderRadius: props.borderRadius }}
      className="round-img"
    />
  );
}
RoundedImg.propType = {
  src: PropTypes.string.isRequired,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RoundedImg.defaultProps = {
  borderRadius: "50%",
  src:
    "https://img2.pngio.com/question-mark-punctuation-sentence-comma-image-png-500x500px-sentence-punctuation-png-820_500.jpg" // this is optional incase user doesn't provide src
};

export default RoundedImg;
