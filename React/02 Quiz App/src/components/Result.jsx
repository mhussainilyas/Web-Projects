import React from "react";

function Result({ score }) {
  return (
    <div className="bg-neutral-100 p-4 sm:p-8 text-center rounded-2xl">
      <h1 className="text-xl sm:text-2xl font-semibold">Your Performance 🏆</h1>
      <p className="text-lg sm:text-xl mt-4">Your score is {score}</p>
    </div>
  );
}

export default Result;
