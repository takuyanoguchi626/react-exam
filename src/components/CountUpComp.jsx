import { useState } from "react";

export const CountUpComp = () => {
  const [name, setName] = useState("");
  const countUp = () => {
    setName("たくや");
  };
  return (
    <div>
      <button onClick={countUp}>名前を表示</button>
      <div>{name}</div>
    </div>
  );
};
