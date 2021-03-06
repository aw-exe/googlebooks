import React, {useState} from "react";

// This file exports the book search form on the top of the search page. 

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props}/>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
