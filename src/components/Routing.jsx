import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "../pages/MainLanding";
import TagLanding from "../pages/TagLanding";
import Article from "./Article";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/tags/:id" element={<TagLanding />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/" element={<MainLanding />} />
      </Routes>

      <div className="footer">
        <i>Powered by NTech</i>
      </div>
    </Router>
  );
};

export default Routing;
