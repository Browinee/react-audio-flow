export const initialNodes = [
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
export const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];
