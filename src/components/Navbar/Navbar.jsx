import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Nav">
      <Link to={"/"} className="nav__logo">
        <img src={logo} alt="nav__logo" />
        <h3>HelpMeOut</h3>
      </Link>
      <div className="nav__links">
        <a href="#features">Features</a>
        <a href="#works">How It Works</a>
      </div>
      <Link to="/signUp/logIn" className="link__tag getStarted">
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
