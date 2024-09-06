import { Handle, Position } from "@xyflow/react";
import { OscillatorNodeProps } from "./types";
import { useChangeFrequency } from "./useChangeFrequency";
import { useChangeType } from "./useChangeType";

export function OscillatorNode({ id, data }: OscillatorNodeProps) {
  const { frequency, changeFrequency } = useChangeFrequency(id, data.frequency);

  const { type, changeType } = useChangeType(id, data.type);
  return (
    <div className={"bg-white shadow-xl"}>
      <p className={"round-t-md p-[8px] bg-pink-500 text-white"}>
        Oscillator Node
      </p>
      <div className={"flex flex-col p-[8px]"}>
        <span>Frequency</span>
        <input
          className="nodrag"
          type="range"
          min="10"
          max="1000"
          value={frequency}
          onChange={changeFrequency}
        />
        <span className={"text-right"}>{frequency} Hz</span>
      </div>
      <hr className={"mx-[4px]"} />
      <div className={"flex flex-col p-[8px]"}>
        <p>Waveform</p>
        <select value={type} onChange={changeType}>
          <option value="sine">Sine Wave</option>
          <option value="triangle">Triangle Wave</option>
          <option value="sawtooth">Sawtooth Wave</option>
          <option value="square">Square Wave</option>
        </select>
      </div>
      <Handle
        className="custom-handle"
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}
