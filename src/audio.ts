const context = new AudioContext();

const osc = context.createOscillator();

const volume = context.createGain();

const out = context.destination;

const nodes = new Map();

(function init() {
  osc.frequency.value = 220;
  osc.type = "square";
  osc.start();

  volume.gain.value = 0.5;

  osc.connect(volume);
  volume.connect(out);

  nodes.set("a", osc);
  nodes.set("b", volume);
  nodes.set("c", out);
})();

export function isRunning() {
  return context.state === "running";
}

export function toggleAudio() {
  return isRunning() ? context.suspend() : context.resume();
}

export function createAudioNode(
  id: string,
  type: string,
  data: Record<string, any>
) {
  switch (type) {
    case "osc":
      const oscNode = context.createOscillator();
      oscNode.frequency.value = data.frequency;
      oscNode.type = data.type;
      oscNode.start();
      nodes.set(id, oscNode);
      break;
    case "volume":
      const node = context.createGain();
      node.gain.value = data.gain;

      nodes.set(id, node);
      break;
  }
}

export function removeAudioNode(id: string) {
  const node = nodes.get(id);
  node.disconnect();
  node.stop?.();
  nodes.delete(id);
}

export function updateAudioNode(id: string, data: Record<string, any>) {
  const node = nodes.get(id);
  for (const [key, val] of Object.entries(data)) {
    if (node[key] instanceof AudioParam) {
      node[key].value = val;
    } else {
      node[key] = val;
    }
  }
}

export function connect(sourceId: string, targetId: string) {
  const source = nodes.get(sourceId);
  const target = nodes.get(targetId);

  source.connect(target);
}

export function disconnect(sourceId: string, targetId: string) {
  const source = nodes.get(sourceId);
  const target = nodes.get(targetId);
  source.disconnect(target);
}
