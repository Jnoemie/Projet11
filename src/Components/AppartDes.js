import "../Styles/Appart.css";
import { useEffect, useState } from "react"; //import des fonction react pour gerer l'etat et l'effet de la page
import { useParams } from "react-router-dom";// import d'une fonction react pour recuperer les parametre de l'url 
import list from "../Datas/List"; // import des données 
import Collapse from "../Components/Collapse";
import Carousel from "../Components/Carousel";

import greyStar from "../Assets/grey_star.png";
import redStar from "../Assets/red_star.png";

function AppartDes() {
  const [imageSlider, setImageSlider] = useState([]);// iniatialise les variable pour stocker les images a vide 

  const idAppart = useParams("id").id; // recupere l'id de l'appartement a partir des parametre de l'url 
  const dataAppart = list.filter((data) => data.id === idAppart);

  useEffect(() => { // effectue une action au chargement de la page ou lors du changement dans l'id 
    const dataCurrentAccomodation = list.filter((data) => data.id === idAppart);// filtre le liste de donnée pour recuperer les information de l'appartement 
    setImageSlider(dataCurrentAccomodation[0].pictures);// mise a jour le variable d'etat avec les images de l'appartement 
  }, [idAppart]);

  const name = dataAppart[0].host.name.split(" ");// separe le nom de proprietaire en deux partie 
  const rating = dataAppart[0].rating;// recupere la note 
  const description = dataAppart[0].description;// recuper le description de l'appartement 
  const equipments = dataAppart[0].equipments;// recupere les equipement 

  return (
    <>
      <Carousel imageSlider={imageSlider} />
      
        <div className="AppartContent">
          <div className="AppartInfos">
            <h1>{dataAppart[0].title}</h1>
            <p>{dataAppart[0].location}</p>
            <div>
              {dataAppart[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="host">
            <div>
              <div className="hostName">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataAppart[0].host.picture}
                alt="host of this accomodation"
              />
            </div>

            <div className="hoststars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
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
