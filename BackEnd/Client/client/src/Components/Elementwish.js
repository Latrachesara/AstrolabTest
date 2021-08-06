import React from "react";
import "./../Style/Elementwish.css";

function Elementwish({ name, id }) {
  return (
    <div className="element">
      <button>{name}</button>
    </div>
  );
}

export default Elementwish;