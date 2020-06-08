import React, { Component } from 'react';
import "./Container.css"

class Col extends Component {
    render() { 
        return ( <div className="container">
            <div className="col-lg-12">
                {this.props.children}
            </div>
        </div> 
        );
    }
}
 
export default Col;