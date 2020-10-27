//using class component
import React, { Component } from "react";

class Favorite extends Component {
  state = {
    clicked: false
  };

  toggleShow = () => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked };
    });
  };
  render() {
    return (
      <div>
        <h2>Click heart to favourite</h2>
        <h1>
          <span onClick={this.toggleShow}>
            {this.state.clicked ? "❤️" : "♡"}
          </span>
        </h1>
      </div>
    );
  }
}
export default Favorite;

//using functional component
// import React, {useState} from "react"

// function Favorite() {
//     const [isFavorite,setIsFavorite]=useState(false)

//     function toggleFavorite(){
//         setIsFavorite(prevState => {
//             return {
//                 isFavorite: !prevState.isFavorited
//             }
//         })
//     }

//         return (
//             <div>
//                 <h3>Click heart to favorite</h3>
//                 <h1>
//                     <span
//                         onClick={toggleFavorite}
//                     >
//                         {isFavorite ? "❤️" : "♡"}
//                     </span>
//                 </h1>
//             </div>
//         )
//     }

// export default Favorite
