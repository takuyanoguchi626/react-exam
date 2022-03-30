import { useState } from "react";

export const Ex10 = () => {
  const [hobby, setHobby] = useState([]);

  const choiceHobby = (e) => {
    setHobby((h) => {
      if (e.target.checked === true) {
        h.push(e.target.value);
        console.log(h);
      } else {
        h = h.filter((h) => h !== e.target.value);
        console.log(h);
      }

      return [...h];
    });
    console.log(e.target.checked);
  };

  return (
    <div>
      <h1>Ex10</h1>
      <div>チェックボックス</div>
      <input
        type="checkbox"
        name="hobby"
        id="bike"
        value="バイク"
        onChange={choiceHobby}
      />
      <label htmlFor="bike">バイク</label>
      <input
        type="checkbox"
        name="hobby"
        id="run"
        value="ラン"
        onChange={choiceHobby}
      />
      <label htmlFor="run">ラン！</label>
      <input
        type="checkbox"
        name="hobby"
        id="swim"
        value="スイム"
        onChange={choiceHobby}
      />
      <label htmlFor="swim">スイム</label>
      <div>
        <div>趣味：{hobby}</div>
      </div>
    </div>
  );
};
