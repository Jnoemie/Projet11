import "../Styles/Value.css";
import React, { useState } from "react";
import vectorTop from "../Assets/vectorTop.png";

function Collapse({ title, content }) { //prise en compte de  title et content 
  const [toggle, setToggle] = useState(false); // utilisation de use state avec toggle initialisé sur false 

  return ( // onclick creer l'evenement qui place toggle a true (change l'image de la fleche )
    <>
      <div > 
        <h3 className="title-sectionValue" onClick={() => setToggle(!toggle)}> 
          {title} 
          <img
            className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
            src={vectorTop}
            alt="show content"
          />
        </h3>
        <div className={toggle ? "content" : "contentHidden"}>
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            : content}
        </div>
      </div>
    </>// en fonction de la valeur de toggle  on creer un div qui map chaque element de tableau content en un element p 
  );
}
export default Collapse;
