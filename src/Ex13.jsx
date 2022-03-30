import { useState } from "react";

export const Ex13 = () => {
  const [check, setCheck] = useState("");
  const checked = (e) => {
    if (e.target.checked === true) {
      setCheck(() => "チェックされました");
    } else {
      setCheck(() => "チェックが外されました");
    }
  };

  return (
    <div>
      <h1>Ex13</h1>
      <div>表示/非表示</div>
      <input type="checkbox" onChange={checked} />
      <div>{check}</div>
    </div>
  );
};
