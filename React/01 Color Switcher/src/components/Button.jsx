import React from "react";

function Button({ children, color, setColor }) {
  function handleSetColor() {
    setColor(color);
  }

  return (
    <>
      <button
        style={{ backgroundColor: color }}
        className="w-36 px-4 py-2 rounded-xl text-white text-lg cursor-pointer"
        onClick={handleSetColor}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
