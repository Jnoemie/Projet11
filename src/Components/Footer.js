import logoWhite from "../Assets/logoWhite.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="kasa-footer">
      <img
        src={logoWhite} // import du logo 
        alt="Kasa écrit en blanc avec une maison à la place du premier A"
        className="kasa-logoWhite"
      />
      <p className="footer-right">© 2020 Kasa. Tous droits réservés</p>
    </div>
  );
}

export default Footer;
