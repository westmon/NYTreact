import React from "react";
import "./Search.css";

const Search = props => (
  <div>
    <div className="images">
      <img className="image" alt={props.name} src={props.image}  onClick={() => 
      {props.handleIncrement(props.id); props.shuffleCards()}} 
      />
    </div>

  </div>
);

export default Search;
