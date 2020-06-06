import React, { Component } from "react";
import "./App.css";
import Col from "./components/Col/Col";
import Row from "./components/Row/Row";
import Card from "./components/Card/Card";
import characters from "./characters.json";


class App extends Component {
  state = {
    characters: [],
    ids: {}
  }

  componentDidMount() {
    this.setState({
      characters: characters.map((char) => <Card key={char.id} char={char} clicked={this.testing}/>)
    });
    
  }

  testing = () => {
    console.log("clicked");
    this.setState({ characters: this.state.characters.sort(() => {return .5 - Math.random()}) });
  }

  render() {
    

    return (
      <Col>
        <Row>
            {this.state.characters}
        </Row>
      </Col>
    );
  }
}

export default App;
