import React from "react";

const H3 = ({ children, className }) => {
  return (
    <h3
      className={`text-xl md:text-2xl lg:text-3xl font-semibold ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
