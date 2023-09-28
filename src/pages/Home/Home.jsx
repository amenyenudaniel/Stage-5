import "./Home.css";
import { Hero, Features, HowItsWorks, Footer } from "../../components";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
const Nav = () => {
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
const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <HowItsWorks />
      <Footer />
    </div>
  );
};

export default Home;
