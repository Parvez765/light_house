import React from "react";
import { useEffect } from "react";

const GetAQuote = ({ changeBgColor }) => {
  useEffect(() => {
    // Change the background color when this component is active
    changeBgColor(
      "bg-gradient-to-br from-red-200 from-20% via-white via-60% to-red-200 to-80%"
    );
  }, [changeBgColor]);

  return (
    <div>
      <h2>2</h2>
    </div>
  );
};

export default GetAQuote;
