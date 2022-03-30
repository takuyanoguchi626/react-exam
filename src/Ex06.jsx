import { useState } from "react";

export const Ex06 = () => {
  const [isTrue, setIsTrue] = useState(true);
  const [hasTrue, setHasTrue] = useState(true);

  const inversionRadio = () => {
    if (isTrue === true) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  };

  const inversionCheckBox = () => {
    if (hasTrue === true) {
      setHasTrue(false);
    } else {
      setHasTrue(true);
    }
  };

  const inversion = () => {
    inversionRadio();
    inversionCheckBox();
  };

  return (
    <div>
      <h1>Ex06</h1>
      <button disabled={!isTrue}>押せるボタン</button>
      <button disabled={isTrue}>押せないボタン</button>
      <br />
      <input type="radio" checked={isTrue} onChange={inversionRadio} />
      チェックされているラジオボタン
      <input type="radio" checked={!isTrue} onChange={inversionRadio} />
      チェックされていないラジオボタン
      <br />
      <input type="checkbox" checked={hasTrue} onChange={inversionCheckBox} />
      チェックされているチェックボックス
      <input type="checkbox" checked={!hasTrue} onChange={inversionCheckBox} />
      チェックされていないチェックボックス
      <br />
      <button onClick={inversion}>反転させる</button>
    </div>
  );
};
