import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import JumboTron from "./components/JumboTron/JumboTron";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Card from "./components/Card/Card";
import characters from "./characters.json";


class App extends Component {
  state = {
    characters: [],
    message: "Click an image to begin!",
    score: 0,
    topscore: 0,
    clickedStatus: []
  }

  componentDidMount() {
    this.setState({
      characters: characters.map((char) => <Card key={char.id} char={char} clicked={this.clicked}/>)
    });
    
  }

  clicked = (charName) => {
    if (this.state.clickedStatus.indexOf(charName) !== -1) {
      this.setState({
        clickedStatus: [],
        message: "Incorrect, "+ charName + " has already been clicked!",
        score: 0
      });
    }
    else {
      this.setState({
        clickedStatus: [...this.state.clickedStatus, charName],
        message: "You guessed correctly!",
        score: this.state.score + 1,
        topscore: (this.state.topscore <= this.state.score) ? this.state.score + 1 : this.state.topscore
      });
    }

    this.setState({ characters: this.state.characters.sort(() => {return .5 - Math.random()}) });
  }

  render() {
    return (
      <>
      <Nav message={this.state.message} score={this.state.score} topscore={this.state.topscore} />
      <JumboTron />
      <Container>
        <Row>
            {this.state.characters}
        </Row>
      </Container>
      </>
    );
  }
}

export default App;
