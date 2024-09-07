import { Handle, Position } from "@xyflow/react";
import { useState } from "react";
import { toggleAudio } from "../../audio";

export function OutputNode() {
  const [isRunning, setIsRuning] = useState(false);
  function toggleAudioHandler() {
    setIsRuning((isRunning) => !isRunning);
    toggleAudio();
  }

  return (
    <div className={"bg-white shadow-xl p-[20px]"}>
      <Handle className="custom-handle" type="target" position={Position.Top} />

      <div>
        <p>Output Node</p>
        <button onClick={toggleAudioHandler}>
          {isRunning ? <span role="img">🔈</span> : <span role="img">🔇</span>}
        </button>
      </div>
    </div>
  );
}
