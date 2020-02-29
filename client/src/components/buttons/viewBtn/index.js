import React from "react";

function ViewBtn(props) {
  return (
    <a target="_blank" href={props.url} >
      <span className="btn btn-primary" {...props} role="button" tabIndex="0">
        View
      </span>
    </a>
  );
}


export default ViewBtn;