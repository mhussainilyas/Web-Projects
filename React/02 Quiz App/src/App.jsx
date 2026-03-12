import React, { useState } from "react";
import Timer from "./components/Timer";
import Question from "./components/Question";
import Result from "./components/Result";

export default function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="w-full min-h-screen p-4">
      <div className="max-w-2xl w-full mx-auto mt-10 bg-olive-50 border border-olive-300 p-5 sm:p-8 rounded-2xl">
        {isOver ? (
          <Result score={score} />
        ) : (
          <>
            <Timer setIsOver={setIsOver} />
            <Question setIsOver={setIsOver} setScore={setScore} />
          </>
        )}
      </div>
    </div>
  );
}
