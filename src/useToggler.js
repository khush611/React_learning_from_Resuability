import { useState } from "react";
//props.defaultOnValue
function useToggler() {
  // Create the state
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };
  return { on, toggle };
}
useToggler.defaultProps = {
  defaultOnValue: false
};
export default useToggler;
