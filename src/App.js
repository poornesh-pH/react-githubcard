import React, { Component } from "react";
import CardList from "./CardList";
import AddCard from "./AddCard";
import "./style.css";

class App extends Component {
  state = {
    profiles: []
  };
  render() {
    const addProfile = newProfile => {
      this.setState(prevState => ( console.log(prevState),
        {
        profiles: [...prevState.profiles, newProfile]
      }));
    };
    return (
      <div>
        <h2>GitHub Card</h2>
        <AddCard addCard={addProfile} />
        <CardList accounts={this.state.profiles} />
      </div>
    );
  }
}
export default App;
