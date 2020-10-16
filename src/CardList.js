import React from "react";
import CardComponent from "./CardComponent";
const CardList = props => {
  const accounts = props.accounts;
  return (
    <div>
    <br/><hr/>
      {accounts && accounts.map(profile => (
        <CardComponent {...profile} />
      ))}
    </div>
  );
};
export default CardList;
