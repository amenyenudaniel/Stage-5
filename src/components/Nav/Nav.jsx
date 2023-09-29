import { Link } from "react-router-dom";
import "./Nav.css";
import { arrowDown, logo, profile } from "../../assets";
const Nav = () => {
  return (
    <nav className="navbar__nav">
      <Link to={"/home"} className="link__tag nav__logo">
        <img src={logo} alt="logo" />
        <h3>HelpMeOut</h3>
      </Link>
      <div className="profile">
        <img src={profile} alt="profile__image" className="profile__image" />
        <p>John Mark</p>
        <img src={arrowDown} alt="arrow__down Image" className="arrow__down" />
      </div>
    </nav>
  );
};

export default Nav;
