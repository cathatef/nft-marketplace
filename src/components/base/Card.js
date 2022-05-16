import React, { useState } from "react";
import "../../styles/base/Card.css";

const Card = React.forwardRef(
  (
    {
      width = "280px",
      height = "380px",
      child,
      onClick,
    },
    ref
  ) => (
    <div
      className="card"
      style={{
        width: `${width}`,
        height: `${height}`,
        background: `radial-gradient(
                rgba(255, 255, 255, 0.05) 0%,         
                rgba(255, 255, 255, 0.05) 70%
              )`,
      }}
      onClick={onClick}
      ref={ref}
    >
      {child}
    </div>
  )
);
export default Card;
