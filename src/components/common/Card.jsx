import React from "react";

import "./Card.css";

const Card = ({ className = "", children, ...rest }) => {
  return (
    <div className={`card ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
};

export default Card;

