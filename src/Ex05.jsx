import { useState } from "react";

export const Ex05 = () => {
  const [name] = useState("野口拓也");
  const [age] = useState(24);
  const [ageAfter10Years] = useState(age + 10);
  return (
    <div>
      <h1>Ex05</h1>
      <div>私のフルネーム：{name}</div>
      <div>現在の年齢：{age}</div>
      <div>10年後の年齢：{ageAfter10Years}</div>
    </div>
  );
};
