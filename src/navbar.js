import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <nav className="Navbarstyle">
      <h1>The new Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">Newblog</Link>
      </div>
    </nav>
  );
};

export default navbar;
