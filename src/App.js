import "./App.css";
import React from "react";
import useTypingGame from "./hooks/useTypingGame";

function App() {
  const {
    textBoxRef,
    isTimeRunning,
    text,
    handleChange,
    count,
    startGame,
    wordCount,
  } = useTypingGame(5);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
      />
      <h3>time remaining: {count}</h3>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>word count: {wordCount} </h1>
    </div>
  );
}

export default App;
