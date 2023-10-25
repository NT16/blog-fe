import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header>
      <div className="col-xs-2 nav-icon">
        <Link to="/">Blogged</Link>
      </div>
      <div id="menus" className="navbar-menus col-xs-10">
        <Link to="/">Home</Link>
        <Link to="/articles">Article</Link>
      </div>
    </header>
  );
}
