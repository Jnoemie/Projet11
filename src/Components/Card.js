import { Link } from "react-router-dom";
import "../Styles/Card.css";

function Card({ id, title, cover }) { // recuperation des donné garce a au composant Appartlist
  return (
    <Link to={`/Appart/${id}`} className="card">
      <img className="img-loc" src={cover} alt={title} />
      <h3 className="title-loc">{title}</h3>
    </Link>
  );
}
export default Card;
