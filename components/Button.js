import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-green-600 hover:bg-green-800 text-white front-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const StartQuizButton = ({ onClick, children }) => {
  return (
    <button
      className="bg-green-600 border-green-600 hover:bg-green-800 hover:border-green-800 text-white font-bold py-10 px-14 rounded transition duration-300 ease-in-out transform hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button, StartQuizButton };
