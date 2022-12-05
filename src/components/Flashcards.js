import { useState } from "react";
import styled from "styled-components";

import Virar from "../assets/img/seta_virar.png";
import errado from "../assets/img/icone_erro.png";
import quase from "../assets/img/icone_quase.png";
import certo from "../assets/img/icone_certo.png";

const Flashcards = ({ posicao, question, answer, icones, setIcones }) => {
  const [fechado, setFechado] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [resposta, setResposta] = useState(false);
  const [icone, setIcone] = useState();

  let cor;

  function responderFlashCard(icone) {
    setResposta(true);
    setIcone(icone);
    setIcones([...icones, icone]);
  }

  if (icone === certo) {
    cor = "#2FBE34";
  } else if (icone === quase) {
    cor = "#FF922E";
  } else {
    cor = "#FF3030";
  }

  return (
    <>
      {!fechado && !aberto && (
        <div className="pergunta-fechada">
          <p data-test="flashcard-text">Pergunta {posicao}</p>
          <ion-icon
            data-test="play-btn"
            name="play-outline"
            onClick={() => setFechado(true)}
          ></ion-icon>
        </div>
      )}
      {fechado && !aberto && (
        <div className="pergunta-aberta">
          <p data-test="flashcard-text">{question}</p>
          <img
            data-test="turn-btn"
            onClick={() => setAberto(true)}
            src={Virar}
            alt="Setinha pra virar"
          />
        </div>
      )}
      {fechado && aberto && !resposta && (
        <div className="repostas">
          <p data-test="flashcard-text">{answer}</p>
          <div className="container-botoes">
            <RedButton
              data-test="no-btn"
              onClick={() => responderFlashCard(errado)}
            >
              Não lembrei
            </RedButton>
            <YellowButton
              data-test="partial-btn"
              onClick={() => responderFlashCard(quase)}
            >
              Quase não lembrei
            </YellowButton>
            <GreenButton
              data-test="zap-btn"
              onClick={() => responderFlashCard(certo)}
            >
              Zap!
            </GreenButton>
          </div>
        </div>
      )}
      {resposta && (
        <div className="pergunta-fechada finalizada">
          <p data-test="flashcard-text" style={{ color: cor }}>
            Pergunta {posicao}
          </p>
          <img src={icone} alt="Ícone de resposta" />
        </div>
      )}
    </>
  );
};

const RedButton = styled.button`
  background-color: #ff3030;
  &:hover {
    box-shadow: 0 0 15px #ff3030;
  }
`;

const YellowButton = styled.button`
  background-color: #ff922e;
  &:hover {
    box-shadow: 0 0 15px #ff922e;
  }
`;

const GreenButton = styled.button`
  background-color: #2fbe34;
  &:hover {
    box-shadow: 0 0 15px #2fbe34;
  }
`;

export default Flashcards;
