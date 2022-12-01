import { useState } from "react";
import Init from "./Init";
import FlashcardsScrn from "./FlashcardsScrn";

const Main = () => {
  const [Initial, setinitial] = useState("Init");
  return (
    <>
      {Initial === "Init" ? (
        <Init setinitial={setinitial} />
      ) : (
        <FlashcardsScrn />
      )}
    </>
  );
};

export default Main;
