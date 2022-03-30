import { useState } from "react";

export const Ex07 = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(() => e.target.value);
  };
  return (
    <div>
      <h1>Ex07</h1>
      <div>テキスト：{text}</div>
      <div>テキストボックス</div>
      <div>
        名前：
        <input type="text" value={text} onChange={handleChange} />
      </div>
    </div>
  );
};
