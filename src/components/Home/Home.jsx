import { useState } from "react";
import { EnterWindow } from "../EnterWindow/EnterWindow";

export const Home = ({ userName, setUserName, allChats }) => {
  const [enter, setEnter] = useState(false);

  return (
    <>
      {!enter && (
        <EnterWindow
          setEnter={setEnter}
          userName={userName}
          setUserName={setUserName}
        />
      )}
    </>
  );
};
