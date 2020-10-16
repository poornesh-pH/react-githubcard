import React, { Component } from "react";

class CardComponent extends Component {
  render() {
 const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info" />
        <div className="name">Name : {profile.name}</div>
        <div className="company">Company : {profile.company}</div>
        <div className="location">Location : {profile.location}</div>
        <div className="followers">Followers : {profile.followers}</div>
        <div className="github-link">GitHub Link : <a href={profile.html_url} target="_blank"> Click me!</a></div>
        <br/><hr/><br/>
      </div>
    );
  }
}
export default CardComponent;
