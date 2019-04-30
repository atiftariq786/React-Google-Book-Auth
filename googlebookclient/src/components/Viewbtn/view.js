import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <a href={props.link} target="_blank">
    <span className="nav-item btn m-2 deep orange accent-3 right" {...props} role="button" tabIndex="0">
    View
    </span>
    </a>
  );
}

export default ViewBtn;