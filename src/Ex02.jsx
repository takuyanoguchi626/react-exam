export const Ex02 = () => {
  const birthDay = String(new Date(1997, 6 - 1, 26));

  const hobby = ["スイム", "バイク", "ラン"];

  return (
    <div>
      <h1>Ex02</h1>
      <div>名前：野口拓也</div>
      <div>年齢：２１</div>
      <div>{birthDay}</div>
      <div>趣味：{hobby}</div>
    </div>
  );
};
