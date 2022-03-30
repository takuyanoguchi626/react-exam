import { useState } from "react";

export const Ex11 = () => {
  const [hobby, setHobby] = useState();
  const changeHobby = (e) => {
    setHobby(() => {
      return e.target.value;
    });
  };
  return (
    <div>
      <h1>Ex11</h1>
      <select name="" id="" onChange={changeHobby}>
        <option value="" unselectable="true">
          趣味を選択してください
        </option>
        <option value="スイム">スイム</option>
        <option value="バイク">バイク</option>
        <option value="ラン">ラン</option>
      </select>
      <div>趣味：{hobby}</div>
    </div>
  );
};
