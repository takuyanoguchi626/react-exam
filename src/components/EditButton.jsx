import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);

  return <button disabled={!isAdmin}>編集</button>;
};
