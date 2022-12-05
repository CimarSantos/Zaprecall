const Footer = ({ icones, cards }) => {
  return (
    <div className="footer-concluidos">
      <h2 data-test="footer">
        {icones.length}/{cards.length} CONCLUÍDOS
      </h2>
    </div>
  );
};

export default Footer;
