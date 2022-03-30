import { useState } from "react";

export const Ex08 = () => {
  const [hobby, setHobby] = useState("");
  const hobbyChange = (e) => {
    setHobby(() => e.target.value);
  };
  return (
    <div>
      <h1>Ex08</h1>
      <div>ラジオボタン</div>
      <div>
        <input
          type="radio"
          name="hobby"
          value="バイク"
          id="bike"
          onChange={hobbyChange}
        />
        <label htmlFor="bike">バイク</label>
        <input
          type="radio"
          name="hobby"
          value="ラン！"
          id="run"
          onChange={hobbyChange}
        />
        <label htmlFor="run">ラン!</label>
        <input
          type="radio"
          name="hobby"
          value="スイム"
          id="swim"
          onChange={hobbyChange}
        />
        <label htmlFor="swim">スイム</label>
      </div>
      <div>趣味：{hobby}</div>
    </div>
  );
};
