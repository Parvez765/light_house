import React from "react";
import { useEffect } from "react";

const CustomOrder = ({ changeBgColor }) => {
  useEffect(() => {
    // Change the background color when this component is active
    changeBgColor(
      "bg-gradient-to-br from-fuchsia-200 from-20% via-white via-60% to-fuchsia-200 to-80%"
    );
  }, [changeBgColor]);

  return (
    <div>
      <h2>4</h2>
    </div>
  );
};

export default CustomOrder;
