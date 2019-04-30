import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <button className="nav-item btn m-2 deep orange accent-3 right" onClick={props.saveButton}>
          
    <span {...props} role="button" tabIndex="0">
    Save
    </span>
    </button>
  );
}

export default SaveBtn;
