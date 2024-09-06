import { useState } from "react";
import { updateAudioNode } from "../../audio";

export const useChangeType = (id: string, typeData: string) => {
  const [type, setType] = useState(typeData);
  const changeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    updateAudioNode(id, { type: e.target.value });
  };
  return { type, changeType };
};
