import { useContext, useState } from "react";
import { Ex01 } from "./Ex01";
import { Ex02 } from "./Ex02";
import { Ex03 } from "./Ex03";
import { Ex04 } from "./Ex04";
import { Ex05 } from "./Ex05";
import { Ex06 } from "./Ex06";
import { Ex07 } from "./Ex07";
import { Ex08 } from "./Ex08";
import { Ex09 } from "./Ex09";
import { Ex10 } from "./Ex10";
import { Ex11 } from "./Ex11";
import { Ex12 } from "./Ex12";
import { Ex13 } from "./Ex13";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      <div>
        {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
        <button onClick={onClickSwitch}>切り替え</button>
        <Card></Card>
      </div>

      <Ex13 />
      <Ex12 />
      <Ex11 />
      <Ex10 />
      <Ex09 />
      <Ex08 />
      <Ex07 />
      <Ex06 />
      <Ex05 />
      <Ex04 />
      <Ex03 />
      <Ex02 />
      <Ex01 />
    </div>
  );
};
