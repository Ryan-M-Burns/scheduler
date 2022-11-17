import { useState } from "react";

const useVisualMode = initial => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    setMode(() => (mode));

    if (!replace) {
      setHistory([...history, mode]);
    }
  };

  const back = () => {
    if (history.length === 1) {
      return setMode(initial);
    }

    const historyCopy = [...history];
    historyCopy.pop();
    setHistory(() => (historyCopy));
    setMode(() => history[history.length - 2]);
  };

  return { mode, transition, back };
};

export default useVisualMode;