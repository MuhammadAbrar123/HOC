import React from "react";

import UpdatedComponent from "./UpdatedComponent";
const Person2 = ({ money, handleClick }) => {
  return (
    <div style={{ backgroundColor: "blue", display: "inline-block", marginLeft: "20px" }}>
      <h2>This person has ${money} </h2>
      <button onClick={handleClick}>Add Money</button>
    </div>
  );
};

export default UpdatedComponent(Person2);
