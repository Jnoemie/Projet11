import { Link } from "react-router-dom";
import "../Styles/Card.scss";

function Card({ id, title, cover }) { // recuperation des donné grace a au composant Appartlist
  return (
    // utilisation du composant link pour rediriger la page vers l'appartement en fonction de son ID 
    <Link to={`/Appart/${id}`} className="card" >
      <div className="img-loc"  style={{ "--img": `url(${cover})` }}></div>
      <h3 className="title-loc">{title}</h3>
    </Link>
  );
}
export default Card;
