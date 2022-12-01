import { useState } from "react";
import Init from "./Init";
import FlashcardsScr from "./FlashcardsScr";

const Main = () => {
  const [Initial, setinitial] = useState("Init");
  return (
    <>
      {Initial === "Init" ? (
        <Init setinitial={setinitial} />
      ) : (
        <FlashcardsScr />
      )}
    </>
  );
};

export default Main;
