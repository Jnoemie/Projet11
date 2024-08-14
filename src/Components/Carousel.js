import "../Styles/Carousel.css";
import VectorRight from "../Assets/vectorright.png";
import VectorLeft from "../Assets/vectorleft.png";
import { useState } from "react";

// declaration de la fonction Carousel qui prend une liste d'images en tant que props 
function Carousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0); // import du hook Use state pour stocker l'index de l'image en cours d'affichage 

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1
    ); // on repart au premier slide quand on arrive au dernier
  };
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1
    ); // on repart au dernier slide quand on est au premier
  };

  return ( // les fleche s'affiche que si il y a plus d'une image 
    <section id="carousel">
      {imageSlider.length > 1 && (
        <img
          className="VectorRight"
          src={VectorRight}
          alt="show next slider"
          onClick={nextSlide}
        />
      )}
      {imageSlider.length > 1 && (
        <img
          className="VectorLeft"
          src={VectorLeft}
          alt="show previous slider"
          onClick={prevSlide}
        />
      )}
      
      {imageSlider.map((slide, index) => (// pour chaque image de la liste une div est creee 
        <div
          key={index} 
          className={
            currentIndex === index
              ? "slide active"// definie si l'image doit s'afficher ou non // si l'image afficher correspônd a l'index en cours alors l'image s'affiche avec une opacité de 1
              : "slide "
          }
        >
          {index === currentIndex && (
            <img src={slide} alt="appartement à louer" />// affiche l'mage 
          )}
          {index === currentIndex && (// affichage de l'index
            <span className="slideCount">
              {currentIndex + 1} / {imageSlider.length} 
            </span>
          )}
        </div>
      ))}
    </section>
  );
}

export default Carousel;
