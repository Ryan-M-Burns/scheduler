import { useState } from "react";

const useVisualMode = initial => {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = mode => {
    //, replace = false
    setMode(mode);


    setHistory([...history, mode]);
  };

  const back = () => {
    const goBack = history.slice();
    setMode(goBack);
  };

  return { mode, transition, back };

};

export default useVisualMode;