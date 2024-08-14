import Header from "../Components/Header.js";
import Banner from "../Components/Banner.js";
import Footer from "../Components/Footer.js";
import AppartList from "../Components/AppartList.js";
import "../Styles/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AppartList />
      <Footer />
    </div>
  );
}

export default Home;
