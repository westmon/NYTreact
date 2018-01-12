import React from "react";
import "./Saved.css";

const Saved = props => (
  <div>
    <div className="images">
      <img className="image" alt={props.name} src={props.image}  onClick={() => 
      {props.handleIncrement(props.id); props.shuffleCards()}} 
      />
    </div>

  </div>
);

export default Saved;
