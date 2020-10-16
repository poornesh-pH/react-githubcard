import React, { Component } from "react";

class AddCard extends Component {
  state = {
    name: ""
  };
  render() {
    const handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      this.props.addCard(this.state.name)
      this.setState({
        name:''
      })    
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={handleChange}
            placeholder="GitHub Username"
            required
          />
          <button type="submit">Add Card</button>
        </form>
      </div>
    );
  }
}
export default AddCard;
