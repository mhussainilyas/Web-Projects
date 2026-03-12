import React, { useState } from "react";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

function App() {
  const [color, setColor] = useState("orange");

  const colors = [
    "red",
    "green",
    "orange",
    "blue",
    "purple",
    "lightseagreen",
    "brown",
    "lightcoral",
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-center justify-center pt-20 p-6">
        <h1 className="text-3xl sm:text-4xl text-white">🎨 Color Switcher</h1>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {colors.map(function (item) {
            return (
              <Button color={item} setColor={setColor}>
                {item}
              </Button>
            );
          })}
        </div>
        <ColorBox color={color} />
      </div>
    </div>
  );
}

export default App;
