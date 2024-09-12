import "../Styles/Carousel.scss";
import VectorRight from "../Assets/vectorright.png";
import VectorLeft from "../Assets/vectorleft.png";
import { useState } from "react";

function Carousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1);
  };

  return (
    <section id="carousel">
      {imageSlider.length > 1 && (
        <>
          <img
            className="VectorRight"
            src={VectorRight}
            alt="Suivant"
            onClick={nextSlide}
          />
          <img
            className="VectorLeft"
            src={VectorLeft}
            alt="Précédent"
            onClick={prevSlide}
          />
        </>
      )}

      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={
            currentIndex === index ? "slide active" : "slide"
          }
          style={{ display: currentIndex === index ? 'block' : 'none' }} // Afficher uniquement le slide actif
        >
          <img src={slide} alt={`Appartement à louer - Vue ${currentIndex + 1}`} />
          
          {imageSlider.length > 1 && (// affichage que lorsque qu'il y a plus d'une image 
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