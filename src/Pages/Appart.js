import Header from "../Components/Header.js";
import AppartDes from "../Components/AppartDes.js";
import Footer from "../Components/Footer.js";
import "../Styles/Appart.css";

function Appart() {
  return (
    <div>
      <Header />
      <main>
        <AppartDes />
      </main>
      <Footer />
    </div>
  );
}

export default Appart;
