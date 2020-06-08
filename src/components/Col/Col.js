import React, { Component } from 'react';

class Col extends Component {
    render() { 
        return ( <div className="container">{this.props.children}</div> );
    }
}
 
export default Col;