import "./Card.css";
import React, { Component } from 'react';

class Card extends Component {
    checkState = () => {
        this.props.clicked(this.props.char.name);
    }
    
    render() { 
        return (  
            <>
            <img onClick={this.checkState} className="m-4 charStyle" src={this.props.char.image} alt={this.props.char.name}></img>
            </>
        );
    }
}
 
export default Card;