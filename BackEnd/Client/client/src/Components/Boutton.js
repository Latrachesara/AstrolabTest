import React, { useEffect } from "react";
import "./Boutton.css";
function Boutton({ Send }) {
  return (
    <button
      type="button"
      className="button button3"
      onClick={() => {
        Send();
      }}
    >
      Sign up
    </button>
  );
}

export default Boutton;
