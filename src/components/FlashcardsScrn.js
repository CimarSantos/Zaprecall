import Logo from "../assets/img/logo.png";

import Flashcards from "./Flashcards";
import Footer from "./Footer";
import cards from "./cards";

const FlashcardsScrn = () => {
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={Logo} alt="Zaprecall" />
        <h1>ZapRecall</h1>
      </div>
      {cards.map((q, i) => (
        <Flashcards key={i} posicao={i + 1} question={q.q} answer={q.a} />
      ))}
      <Footer cards={cards} />
    </div>
  );
};

export default FlashcardsScrn;
