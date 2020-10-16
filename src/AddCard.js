import React, { Component } from "react";
import request from 'superagent'

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
       request.get(`https://api.github.com/users/${this.state.name}`)
       .then(res=>{
      this.props.addCard(res.body)})
      .catch(err=>alert('User '+ err.message))
      this.setState({
        name:''
      });    
    }
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
