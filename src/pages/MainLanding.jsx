import LandingScreen1 from "../components/LandingScreen1";
import { Link } from "react-router-dom";

export default function MainLanding() {
  return (
    <div className="">
      <LandingScreen1 />
      <div className="categories-all">
        <div className="category row">
          <Link className="col-2 landing-main-category" to="/tags/1">
            Stories
          </Link>
          <p className="landing-sub-category col-10">
            <span>Life</span> <span>Travel</span> <span>Life</span>
          </p>
        </div>
        <div className="category">
          <p className="col-2 landing-main-category">Movies</p>
          <p className="landing-sub-category col-10">
            <span>Life</span> <span>Animation</span> <span>Life</span>
          </p>
        </div>
      </div>
    </div>
  );
}
