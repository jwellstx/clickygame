import React, { Component } from 'react';
import "./Nav.css"

class Nav extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light fixed-top">
                <a className="text refresh" href="/">Clicky Game</a>
                <span className="text">{this.props.message}</span>
                <span className="text">Score: {this.props.score} | Top Score: {this.props.topscore} </span>
            </nav>
         );
    }
}
 
export default Nav;