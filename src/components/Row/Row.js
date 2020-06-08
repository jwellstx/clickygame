import React, { Component } from 'react';
import "./Row.css";

class Row extends Component {
    render() { 
        return ( 
        <div className="row">
            <div className="textAlign">
                {this.props.children}
            </div>
        </div>  
    );
    }
}
 
export default Row;