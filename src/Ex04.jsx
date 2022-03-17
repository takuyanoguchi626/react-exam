import { NameComp } from "./components/NameComp";
import { CountUpComp } from "./components/CountUpComp";
import { useState } from "react";

export const Ex04 = () => {
  const [num, setNum] = useState(0);
  //   const [num2, setNum2] = useState();

  const countUp = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Ex04</h1>
      <NameComp name="takuya"></NameComp>
      <NameComp name="野口"></NameComp>
      <CountUpComp></CountUpComp>
      <button onClick={countUp}>カウントアップ</button>
      <div>{num}</div>
    </div>
  );
};
