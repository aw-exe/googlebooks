import React from "react";

function ViewBtn(props) {
  return (
    <span className="btn btn-primary" {...props} role="button" tabIndex="0">
      View
    </span>
  );
}


export default ViewBtn;