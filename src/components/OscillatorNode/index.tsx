import { Handle, Position } from "@xyflow/react";

export interface OscillatorNodeProps {
  id: string;
  data: {
    frequency: number;
    type: string;
  };
}

export function OscillatorNode({ id, data }: OscillatorNodeProps) {
  return (
    <div className={"bg-white shadow-xl"}>
      <p className={"round-t-md p-[8px] bg-pink-500 text-white"}>
        Oscillator Node
      </p>
      <div className={"flex flex-col p-[8px]"}>
        <span>Frequency</span>
        <input type="range" min="10" max="1000" value={data.frequency} />
        <span className={"text-right"}>{data.frequency} Hz</span>
      </div>
      <hr className={"mx-[4px]"} />
      <div className={"flex flex-col p-[8px]"}>
        <p>Waveform</p>
        <select value={data.type}>
          <option value="sine">Sine Wave</option>
          <option value="triangle">Triangle Wave</option>
          <option value="sawtooth">Sawtooth Wave</option>
          <option value="square">Square Wave</option>
        </select>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
