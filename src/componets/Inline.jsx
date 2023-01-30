import React from "react";

function Inline() {
  const heading = {
    fontSize: "74px",
    color: "blue",
    backgroundColor: "yellow",
    borderRadius: "10px",
    padding: "10px",
    width: "fit-content",
    border: "1px solid blue",
  };
  return (
    <div>
      <h1 style={heading}>Inline styling</h1>
    </div>
  );
}

export default Inline;
