import React from "react";

const Drinks = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8 px-3">
        <p>Drinks layout</p>;
      </div>
      {children}
    </div>
  );
};

export default Drinks;
