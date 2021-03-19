import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(5);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function wordCount(str) {
    const wordArr = str.trim().split(" ");
    return wordArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((prevTime) => prevTime - 1);
      }, 1000);
    }
  }, [count]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h3>time remaining: {count}</h3>
      <button onClick={() => wordCount(text)}>Start</button>
      <h1>word count: ??? </h1>
    </div>
  );
}

export default App;
