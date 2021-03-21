import { useState, useEffect, useRef } from "react";

function useTypingGame(startingGame = 10) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(startingGame);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordArr = text.trim().split(" ");
    return wordArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setCount(startingGame);
    setText("");
    textBoxRef.current.disabled = false; //we do this cause the box is disabled
    //and when cliccking start is then possible to type, because this is a syncronized process takes a milisecond to actually change the state of
    //of setTimerRunning to true, so changing manually the useRef it will make posible to the use the focus() method
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && count > 0) {
      setTimeout(() => {
        setCount((prevTime) => prevTime - 1);
      }, 1000);
      // return () => clearTimeout(timer);
    } else if (count === 0) {
      endGame();
    }
  }, [count, isTimeRunning]);

  return {
    textBoxRef,
    isTimeRunning,
    text,
    handleChange,
    count,
    startGame,
    wordCount,
  };
}

export default useTypingGame;
