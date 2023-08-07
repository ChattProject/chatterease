import { useState } from "react";
import { EnterWindow } from "../EnterWindow/EnterWindow";

export const Home = ({ userName, setUserName }) => {
  return (
    <>
      <EnterWindow userName={userName} setUserName={setUserName} />
    </>
  );
};
