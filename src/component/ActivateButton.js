import React from "react";

const ActivateButton = ({ onStartTimer, onStopTimer, onResetTimer }) => {
  return (
    <div>
      <button onClick={() => onStartTimer()}>START</button>
      <button onClick={() => onStopTimer()}>PAUSE</button>
      <button onClick={() => onResetTimer()}>RESET</button>
    </div>
  );
};

export default ActivateButton;
