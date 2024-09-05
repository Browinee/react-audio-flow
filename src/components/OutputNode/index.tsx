import { Handle, Position } from "@xyflow/react";
import { useState } from "react";

export function OutputNode() {
  const [isRunning, setIsRuning] = useState(false);

  function toggleAudio() {
    setIsRuning((isRunning) => !isRunning);
  }

  return (
    <div className={"bg-white shadow-xl p-[20px]"}>
      <Handle type="target" position={Position.Top} />

      <div>
        <p>Output Node</p>
        <button onClick={toggleAudio}>
          {isRunning ? <span role="img">🔈</span> : <span role="img">🔇</span>}
        </button>
      </div>
    </div>
  );
}
