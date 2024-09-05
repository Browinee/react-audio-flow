import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  MiniMap,
  OnConnect,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { OscillatorNode } from "./components/OscillatorNode";
import { VolumeNode } from "./components/VolumeNode";
import { OutputNode } from "./components/OutputNode";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { frequency: 440, type: "sine" },
    type: "osc",
  },
  {
    id: "2",
    position: { x: 0, y: 300 },
    type: "volume",
    data: { gain: 0.6 },
  },
  {
    id: "3",
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
    setEdges((eds) => addEdge(params, eds));
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
      </ReactFlow>
    </div>
  );
}
