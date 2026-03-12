import React, { useEffect, useState } from "react";

function Timer({ setIsOver }) {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timeInterval);
          setIsOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [setIsOver]);

  let displayMsg = `${Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, 0)} : ${Math.floor(timeLeft % 60)
    .toString()
    .padStart(2, 0)}`;

  return (
    <div className="">
      <p className="text-xl sm:text-2xl">
        ⌚ Time Left{" "}
        <span className="font-semibold text-orange-500">{displayMsg}</span>
      </p>
    </div>
  );
}

export default Timer;
