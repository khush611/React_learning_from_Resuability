import React from "react";

import Header from "./Header";
import Button from "./Button";
import ThemeContext from "./themeContext";

function App() {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>
        {/*this is generic theme passed from index.js*/}
        {(theme) => <Button theme={theme} />}
      </ThemeContext.Consumer>
      {/*this is the different styled/themed button*/}
      <Button theme={"light"} />
      <Button theme="monkey" /> {/*proptypes throws warning*/}
    </div>
  );
}

export default App;
