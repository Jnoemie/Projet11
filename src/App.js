import {Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/Notfound";
import Appart from "./Pages/Appart";
import About from "./Pages/About";

import './Styles/App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Appart/:id" element={<Appart />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;