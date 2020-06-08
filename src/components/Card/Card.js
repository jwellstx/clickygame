import "./Card.css";
import React, { Component } from 'react';

class Card extends Component {
    state = { clicked: false };
    
    render() { 
        return (  
            <>
            {/* <h3> {this.props.char.name} </h3>  */}
            <img onClick={this.props.clicked} className="m-4 charStyle" src={this.props.char.image} alt={this.props.char.name}></img>
            </>
        );
    }
}
 
export default Card;

// function Card(props) {
//     console.log(props);
//     return (  
//     <>
//     {/* <h3> {props.char.name} </h3>  */}
//     <img className="m-4" src={props.char.image}></img>
//     </>
//     );
// }
 
// export default Card;