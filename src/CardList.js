import React from "react";
import CardComponent from "./CardComponent";
const CardList = props => {
  const accounts = props.accounts;
  return (
    <div>
    <br/><hr/>
      {accounts && accounts.map(profile => (
        <CardComponent {...profile} key={profile.id}/>
      ))}
    </div>
  );
};
export default CardList;
