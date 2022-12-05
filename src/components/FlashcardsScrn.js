import { useState } from "react";
import Logo from "../assets/img/logo.png";

import Flashcards from "./Flashcards";
import Footer from "./Footer";
import cards from "./cards";

const FlashcardsScrn = () => {
  const [icones, setIcones] = useState([]);
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={Logo} alt="Zaprecall" />
        <h1>ZapRecall</h1>
      </div>
      {cards.map((q, i) => (
        <Flashcards
          data-test="flashcard"
          key={i}
          posicao={i + 1}
          question={q.q}
          answer={q.a}
          icones={icones}
          setIcones={setIcones}
        />
      ))}
      <Footer icones={icones} cards={cards} />
    </div>
  );
};

export default FlashcardsScrn;
