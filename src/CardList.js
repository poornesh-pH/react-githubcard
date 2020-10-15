import React from "react";
import CardComponent from "./CardComponent";
const CardList = props => {
  const profiles = props.profiles;
  return (
    <div>
    <br/><hr/>
      {profiles.map(profile => (
        <CardComponent {...profile} />
      ))}
    </div>
  );
};
export default CardList;
