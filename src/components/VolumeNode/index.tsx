import { Handle, Position } from "@xyflow/react";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { updateAudioNode } from "../../audio";

export interface VolumeNodeProps {
  id: string;
  data: {
    gain: number;
  };
}

export function VolumeNode({ id, data }: VolumeNodeProps) {
  const [gain, setGain] = useState(data.gain);

  const changeGain: ChangeEventHandler<HTMLInputElement> = (e) => {
    setGain(+e.target.value);
    updateAudioNode(id, { gain: +e.target.value });
  };

  return (
    <div className={"rounded-md bg-white shadow-xl"}>
      <Handle className="custom-handle" type="target" position={Position.Top} />

      <p className={"rounded-t-md p-[4px] bg-blue-500 text-white"}>Volume</p>
      <div className={"flex flex-col p-[4px]"}>
        <p>Gain</p>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={gain}
          onChange={changeGain}
        />
        <p className={"text-right"}>{gain.toFixed(2)}</p>
      </div>

      <Handle
        className="custom-handle"
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}
