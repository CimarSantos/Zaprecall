import styled from "styled-components";

import Logo from "../assets/img/logo.png";

const Init = ({ setinitial }) => {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <h1>ZapRecall</h1>
      <button data-test="start-btn" onClick={() => setinitial("FlashcardsScr")}>
        Iniciar Recall!
      </button>
    </Container>
  );
};

export default Init;

const Container = styled.div`
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    width: 200px;
  }

  h1 {
    font-family: "Righteous";
    font-size: 70px;
    color: #fff;
    padding: 70px 0;
  }

  button {
    color: #d70900;
    width: 70%;
    height: 10%;
    font-size: 25px;
    border: 1px solid #d70900;
    border-radius: 10px;

    &:hover {
      background-color: #d70900;
      color: #fff;
      box-shadow: 0 0 15px #000;
    }
  }
`;
