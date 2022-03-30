import { useEffect, useState } from "react";

export const Ex12 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const calc1 = (e) => {
    setNum1(() => e.target.value);
  };
  const calc2 = (e) => {
    setNum2(() => e.target.value);
  };
  useEffect(() => {
    setResult(() => Number(num1) + Number(num2));
  }, [num1, num2]);
  return (
    <div>
      <h1>Ex12</h1>
      <input type="text" defaultValue={0} onChange={calc1} />+
      <input type="text" defaultValue={0} onChange={calc2} />=
      <input type="text" value={result} readOnly />
    </div>
  );
};
