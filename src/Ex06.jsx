import { useState } from "react";

export const Ex06 = () => {
  const [isTrue, setIsTrue] = useState(true);

  const inversion = () => {
    console.log("1" + isTrue);

    if (isTrue === true) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
    console.log("2" + isTrue);
  };

  return (
    <div>
      <h1>Ex06</h1>
      <button disabled={!isTrue}>押せるボタン</button>
      <button disabled={isTrue}>押せないボタン</button>
      <br />
      <input type="radio" checked={isTrue} />
      チェックされているラジオボタン
      <input type="radio" checked={!isTrue} />
      チェックされていないラジオボタン
      <br />
      <input type="checkbox" checked={isTrue} />
      チェックされているチェックボックス
      <input type="checkbox" checked={!isTrue} />
      チェックされていないチェックボックス
      <br />
      <button onClick={inversion}>反転させる</button>
    </div>
  );
};
