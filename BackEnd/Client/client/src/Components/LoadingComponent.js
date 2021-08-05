import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function LoadingComponent() {
  return (
    <div>
      <center>
        <CircularProgress
          disableShrink
          style={{ color: "teal", width: "5%", height: "5%", marginTop: "10%" }}
        />
      </center>
    </div>
  );
}

export default LoadingComponent;
