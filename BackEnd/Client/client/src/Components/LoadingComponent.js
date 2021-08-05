import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function LoadingComponent() {
  return (
    <div>
      <center>
        <CircularProgress
          disableShrink
          style={{ color: "teal"}}
        />
      </center>
    </div>
  );
}

export default LoadingComponent;
