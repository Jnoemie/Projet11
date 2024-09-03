import "../Styles/Appart.scss";
import { useEffect, useState } from "react"; // import des fonctions React pour gérer l'état et les effets
import { useParams, useNavigate } from "react-router-dom"; // import des fonctions pour récupérer les paramètres de l'URL et naviguer
import list from "../Datas/List"; // import des données
import Collapse from "../Components/Collapse";
import Carousel from "../Components/Carousel";

import greyStar from "../Assets/grey_star.png";
import redStar from "../Assets/red_star.png";

function AppartDes() {
  const [imageSlider, setImageSlider] = useState([]); // initialise les variables pour stocker les images à vide
  const navigate = useNavigate();
  
  const { id } = useParams(); // récupère l'id de l'appartement à partir des paramètres de l'URL
  const dataAppart = list.find((data) => data.id === id);

  useEffect(() => {
    if (!dataAppart) {
      navigate("/NotFound"); // Redirige vers la page NotFound si l'appartement n'est pas trouvé
      return;
    }
    setImageSlider(dataAppart.pictures); // met à jour l'état avec les images de l'appartement
  }, [id, dataAppart, navigate]);

  if (!dataAppart) {
    return null; // Retourne null pour ne rien afficher avant la redirection
  }

  const name = dataAppart.host.name.split(" "); // sépare le nom du propriétaire en deux parties
  const rating = dataAppart.rating; // récupère la note
  const description = dataAppart.description; // récupère la description de l'appartement
  const equipments = dataAppart.equipments; // récupère les équipements

  return (
    <>
      <Carousel imageSlider={imageSlider} />
      
      <div className="AppartContent">
        <div className="AppartInfos">
          <h1>{dataAppart.title}</h1>
          <p>{dataAppart.location}</p>
          <div >
            {dataAppart.tags.map((tag, index) => (
              <button key={index}>{tag}</button> // affiche le tag de l'appartement
            ))}
          </div>
        </div>
        <div className="host">
          <div>
            <div className="hostName">
              <span>{name[0]}</span>
              <span>{name[1]}</span>
            </div>
            <img
              src={dataAppart.host.picture} // photo du propriétaire
              alt="host of this accommodation"
            />
          </div>

          <div className="hoststars">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1; // génération des étoiles en fonction des notes
              return (
                <img
                  key={index}
                  src={ratingValue <= rating ? redStar : greyStar}
                  alt="star"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="AppartValue">
        <div className="ValueItem">
          <Collapse title={"Description"} content={description} />
        </div>
        <div className="ValueItem">
          <Collapse title={"Équipements"} content={equipments} />
        </div>
      </div>
    </>
  );
}

export default AppartDes;