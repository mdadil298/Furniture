import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ProPage from "./pages/ProPage";
import Detail from "./pages/Detail";
import Carts from "./pages/Carts";
import Check from "./pages/Check";
import Thanks from "./pages/Thanks";
 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/checkout" element={<Check />} />
        <Route path="/thankyou" element={<Thanks />} />
    
      </Routes>
    </Router>
  );
}

export default App;
