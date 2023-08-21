import React from "react";
import { useState } from "react";

const UpdatedComponent = (Original) => {
  function NewComponent() {
    const [money, setMoney] = useState(10);

    function handleClick() {
      return setMoney(money * 2);
    }
    return <Original handleClick={handleClick} money={money} />;
  }
  return NewComponent;
};

export default UpdatedComponent;
