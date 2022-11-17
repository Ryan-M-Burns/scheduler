import { useState } from "react";
// Hook to show/hide appointments
const useVisualMode = initial => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    setMode(() => mode);

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
    setHistory(() => historyCopy);
    setMode(() => history[history.length - 2]);
  };

// returns the current mode state, transition function and back function
  return { mode, transition, back };
};

export default useVisualMode;