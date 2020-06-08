import React, { Component } from "react";
import "./JumboTron.css";

class JumboTron extends Component {
  render() {
    return (
      <div className=" two jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Overwatch Clicky Game!</h1>
          <p className="lead">
            A memory based game, click on each character only <strong>once</strong>! Click all 12 to win!
          </p>
        </div>
      </div>
    );
  }
}

export default JumboTron;
