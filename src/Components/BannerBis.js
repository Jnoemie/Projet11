import bannerAbout from "../Assets/bannerAbout.png";
import "../Styles/Banner.css";

function BannerBis() { // import de la banniére pour a propos 
  return (
    <div className="container-banner">
      <img src={bannerAbout} alt="une montagne enneigée" className="banner" />
    </div>
  );
}
export default BannerBis;
