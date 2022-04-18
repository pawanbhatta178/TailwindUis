import React, { useCallback, useMemo, useState } from "react";

const alphabets = "abcdefghijklmnopqrstuvwxyz";

const color = [
  "text-red-500",
  "text-purple-500",
  "text-green-500",
  "text-yellow-500",
  "text-orange-500",
  "text-blue-500",
  "text-gray-400",
  "text-black",
];

export const Alphabets = () => {
  const [index, setIndex] = useState(0);

  const increment = () => {
    setIndex((curr) => {
      if (curr >= 25) {
        return 0;
      }
      return curr + 1;
    });
  };

  const getRandomColor = useCallback(() => {
    const index = Math.floor(Math.random() * color.length) + 1;
    return color[index] ? color[index] : color[1];
  }, []);

  return (
    <div className="flex flex-col">
      <div className={`uppercase text-9xl text-center ${getRandomColor()}`}>
        {alphabets[index]}
      </div>
      <button
        className="bg-purple-500 text-white rounded-lg p-4"
        onClick={() => increment()}
      >
        Next
      </button>
    </div>
  );
};
