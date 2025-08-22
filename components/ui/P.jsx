import React from "react";

const P = ({ className, children }) => {
  return (
    <p className={`text-justify text-primary-content/80 ${className}`}>
      {children}
    </p>
  );
};

export default P;
