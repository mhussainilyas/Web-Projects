import React from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="max-w-96 w-full aspect-video mt-8 rounded-2xl content-center text-center"
    >
      <p className="capitalize text-xl font-semibold text-white">{color}</p>
    </div>
  );
}

export default ColorBox;
