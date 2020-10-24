import React from "react";
import Header from "./Header";
import Button from "./Button";
//here,header and button will reflect same styling wherever used
//or whatever element passed to it
function App() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
}

export default App;
