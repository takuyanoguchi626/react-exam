import { useState } from "react";

export const Ex09 = () => {
  const [check, setCheck] = useState("false");
  const agree = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setCheck("true");
    }
    if (e.target.checked === false) {
      setCheck("false");
    }
  };
  return (
    <div>
      <h1>Ex09</h1>
      <div>チェックボックス</div>
      <div>
        同意する：
        <input type="checkbox" onChange={agree} />
      </div>
      <div>回答：{check}</div>
    </div>
  );
};
