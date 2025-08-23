import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      {children}
    </div>
  );
};

export default layout;
