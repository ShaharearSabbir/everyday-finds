import React from "react";

const H1 = ({ className, children }) => {
  return (
    <h1 className={`text-2xl md:text-3xl lg:text-5xl font-bold`}>{children}</h1>
  );
};

export default H1;
