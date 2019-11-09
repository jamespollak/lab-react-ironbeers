import React from "react";
import { Link } from "react-router-dom";

function singleBeer(props) {
  if (props.isDetailed) {
    return (
      <div className="beer-layout">
        <h3>{props.name}</h3>
        <img className="beer-image" src={props.image_url} alt="" />
        <p>{props.description}</p>
      </div>
    );
  }
  return (
    <div className="beer-layout">
      <Link to={`/beer-detail/${props._id}`}>
        <h3>{props.name}</h3>
        <img className="beer-image" src={props.image_url} alt="" />
      </Link>
    </div>
  );
}

export default singleBeer;
