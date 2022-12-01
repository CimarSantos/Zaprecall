import Logo from "../assets/img/logo.png";

const FlashcardsScreen = () => {
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={Logo} alt="Zaprecall" />
        <h1>ZapRecall</h1>
      </div>
    </div>
  );
};

export default FlashcardsScreen;
