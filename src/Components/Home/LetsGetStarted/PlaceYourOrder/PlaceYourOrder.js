import React from "react";
import { useEffect } from "react";

const PlaceYourOrder = ({ changeBgColor }) => {
  useEffect(() => {
    // Change the background color when this component is active
    changeBgColor(
      "bg-gradient-to-br from-green-200 from-20% via-white via-60% to-green-200 to-80%"
    );
  }, [changeBgColor]);

  return (
    <div>
      <h2>3</h2>
    </div>
  );
};

export default PlaceYourOrder;
