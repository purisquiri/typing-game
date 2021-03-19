import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(15);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordArr = text.trim().split(" ");
    return wordArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (isTimeRunning && count > 0) {
      setTimeout(() => {
        setCount((prevTime) => prevTime - 1);
      }, 1000);
      // return () => clearTimeout(timer);
    } else if (count === 0) {
      setIsTimeRunning(false);
      setWordCount(calculateWordCount(text));
    }
  }, [count, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h3>time remaining: {count}</h3>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>word count: {wordCount} </h1>
    </div>
  );
}

export default App;
