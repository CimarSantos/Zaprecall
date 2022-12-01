import { useState } from "react";

import Virar from "../assets/img/seta_virar.png";

const Flashcards = ({ posicao, pergunta }) => {
  const [fechado, setFechado] = useState(false);
  const [aberto, setAberto] = useState(false);

  function viraCarta() {
    setFechado(true);
  }
  return (
    <>
      {!fechado && (
        <div className="pergunta-fechada">
          <p>Pergunta {posicao}</p>
          <ion-icon name="play-outline" onClick={viraCarta}></ion-icon>
        </div>
      )}
      {fechado && !aberto && (
        <div className="pergunta-aberta">
          <p>{pergunta}</p>
          <img src={Virar} alt="Setinha pra virar" />
        </div>
      )}
    </>
  );
};

export default Flashcards;
