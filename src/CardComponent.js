import React, { Component } from "react";

class CardComponent extends Component {
  render() {
 const profile = this.props;
//  console.log(profile)
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info" />
        <div className="name">Name : {profile.name}</div>
        <div className="company">Company : {profile.company}</div>
        <br/><hr/><br/>
      </div>
    );
  }
}
export default CardComponent;
