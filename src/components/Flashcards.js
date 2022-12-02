import { useState } from "react";
import styled from "styled-components";

import Virar from "../assets/img/seta_virar.png";

const Flashcards = ({ posicao, question, answer }) => {
  const [fechado, setFechado] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [resposta, setResposta] = useState(false);

  function viraCarta() {
    setFechado(true);
    setAberto(true);
  }
  function viraResposta() {
    setFechado(false);
    setAberto(false);
    setResposta(true);
  }

  return (
    <>
      {!fechado && !aberto && !resposta && (
        <div className="pergunta-fechada">
          <p>Pergunta {posicao}</p>
          <ion-icon name="play-outline" onClick={viraCarta}></ion-icon>
        </div>
      )}
      {fechado && aberto && (
        <div className="pergunta-aberta">
          <p>{question}</p>
          <img onClick={viraResposta} src={Virar} alt="Setinha pra virar" />
        </div>
      )}
      {!fechado && !aberto && resposta && (
        <div className="repostas ">
          <p>{answer}</p>
          <div className="container-botoes">
            <RedButton>Não lembrei</RedButton>
            <YellowButton>Quase não lembrei</YellowButton>
            <GreenButton>Zap!</GreenButton>
          </div>
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
