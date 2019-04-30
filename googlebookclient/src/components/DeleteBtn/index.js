import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button onClick={props.deleteButton}>
      <span className="nav-item btn m-2 deep orange accent-3 right" {...props} role="button" tabIndex="0">
    Delete
    </span>
    </button>
  );
}

export default DeleteBtn;
