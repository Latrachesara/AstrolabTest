import React from "react";
import "./../Style/Elementwish.css";

function Elementwish({ name, id }) {
  return (
    <div className="element">
      <a href="#">{name}</a>
    </div>
  );
}

export default Elementwish;