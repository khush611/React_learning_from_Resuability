import React, { useState } from "react";

function App() {
  const [answer] = useState("no");
  return <h1> is state imp?{answer}</h1>;
}
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App;
