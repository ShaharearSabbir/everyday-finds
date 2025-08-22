import React from "react";

const Section = ({ children, className }) => {
  return (
    <div className={`container px-4 mx-auto ${className}`}>{children}</div>
  );
};

export default Section;
