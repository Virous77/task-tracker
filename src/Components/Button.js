import React from "react";

const Button = ({ title, onClick, showAdd }) => {
  return (
    <button
      style={{
        color: "white",
        backgroundColor: showAdd ? "red" : "green",
        padding: "8px 1rem",
        border: "none",
        borderRadius: "5px",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
