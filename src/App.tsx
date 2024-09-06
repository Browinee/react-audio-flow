import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  MiniMap,
  OnConnect,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { OscillatorNode } from "./components/OscillatorNode";
import { VolumeNode } from "./components/VolumeNode";
import { OutputNode } from "./components/OutputNode";
import { connect, createAudioNode } from "./audio";

const initialNodes = [
  {
    id: "a",
    position: { x: 0, y: 0 },
    data: { frequency: 440, type: "sine" },
    type: "osc",
  },
  {
    id: "b",
    position: { x: 0, y: 300 },
    type: "volume",
    data: { gain: 0.6 },
  },
  {
    id: "c",
    position: { x: 0, y: 500 },
    type: "out",
    data: {},
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];
const nodeTypes = {
  osc: OscillatorNode,
  volume: VolumeNode,
  out: OutputNode,
};
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: Connection) => {
    connect(params.source, params.target);
    setEdges((eds) => addEdge(params, eds));
  };

  const addOscNode = () => {
    const id = Math.random().toString().slice(2, 8);
    const position = { x: 0, y: 0 };
    const type = "osc";
    const data = { frequency: 400, type: "sine" };
    setNodes([...nodes, { id, position, type, data }]);
    createAudioNode(id, type, data);
  };

  const addVolumeNode = () => {
    const id = Math.random().toString().slice(2, 8);
    const position = { x: 0, y: 300 };
    const type = "volume";
    const data = { gain: 0.6 };

    setNodes([...nodes, { id, position, type, data }]);
    createAudioNode(id, type, data);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} />
        <Panel className={"space-x-4"} position="top-right">
          <button
            className={"p-[4px] rounded bg-white shadow"}
            onClick={addOscNode}
          >
            Add Oscillator Node
          </button>
          <button
            className={"p-[4px] rounded bg-white shadow"}
            onClick={addVolumeNode}
          >
            Add Volume Node
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
}
