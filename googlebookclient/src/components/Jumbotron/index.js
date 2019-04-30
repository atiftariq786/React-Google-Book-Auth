import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 80, textAlign: "center", marginTop: 20 }}
      className="jumbotron text-white center-align orange accent-3 jumbo-bg"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
