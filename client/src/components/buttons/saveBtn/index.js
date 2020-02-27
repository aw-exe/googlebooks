import React from "react";

function SaveBtn(props) {
  return (
    <span className="btn btn-success" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveBtn;