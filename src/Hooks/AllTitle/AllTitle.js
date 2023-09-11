import React from "react";
import { useEffect } from "react";

const AllTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - lightHouse`;
  }, [title]);
};

export default AllTitle;
