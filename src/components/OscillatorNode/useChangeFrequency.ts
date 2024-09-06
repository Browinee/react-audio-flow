import { useState } from "react";
import { updateAudioNode } from "../../audio";

export const useChangeFrequency = (id: string, frequencyData: number) => {
  const [frequency, setFrequency] = useState(frequencyData);
  const changeFrequency = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrequency(+e.target.value);
    updateAudioNode(id, { frequency: +e.target.value });
  };
  return { frequency, changeFrequency };
};
