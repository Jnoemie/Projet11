import Header from "../Components/Header.js";
import BannerBis from "../Components/BannerBis.js";
import Collapse from "../Components/Collapse.js";
import Footer from "../Components/Footer.js";
import { value } from "../Datas/value.js";
import "../Styles/Appart.css";

function About() {
  return (
    <div>
      <Header />
      <BannerBis />
      <main className="about_main">
        {value.map((data) => {
          return (
            <div key={data.id} >
              <Collapse title={data.title} content={data.description} />
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default About;
