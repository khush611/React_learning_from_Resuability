import { useState } from "react";
function useCounter() {
  const [count, setCount] = useState(0); //returning array so that count can be renamed to whatever while returning it from usecounter.

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return { count, increment }; //returning as object in order to lesser down the probabilty to modify code. since while destructuring you cant change the name of the properties.
  //it lesser down the flexibility of anyone using our hook.
}
export default useCounter;
