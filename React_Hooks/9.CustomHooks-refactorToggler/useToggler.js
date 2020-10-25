import { useState } from "react";
//sending default params like in vanilla js
function useToggler(defaultOnValue = false) {
  // Create the state
  const [on, setOn] = useState(defaultOnValue);

  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };
  return [on, toggle];
}
//we cant use defaultprops in regular fn
// useToggler.defaultProps = {
//         defaultOnValue: false
//     }
export default useToggler;
