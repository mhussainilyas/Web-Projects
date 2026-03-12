import React, { useState } from "react";
import questions from "../json/question.json";

function Question({ setIsOver, setScore }) {
  const [index, setIndex] = useState(0);

  const handleOptionClick = (option) => {
    if (option === questions[index].correct_answer) {
      setScore((prev) => {
        return prev + 1;
      });
    }
    if (index + 1 < questions.length) {
      setIndex((prev) => {
        return prev + 1;
      });
    } else {
      setIsOver(true);
    }
  };

  return (
    <div className="mt-5 sm:mt-8">
      <h2 className="text-lg sm:text-2xl mb-5">
        <span className="font-semibold">Question</span> -{" "}
        {questions[index].question}
      </h2>
      <div className="flex flex-col gap-4">
        {questions[index].options.map((opt, i) => {
          return (
            <button
              key={i}
              onClick={() => handleOptionClick(opt)}
              className="bg-olive-100 border border-olive-300 p-4 rounded-xl text-sm sm:text-lg text-left hover:bg-olive-200 cursor-pointer"
            >
              {i + 1} - {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
