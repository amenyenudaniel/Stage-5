import "./GetStarted.css";

import { Link } from "react-router-dom";
import { LogInCard } from "../../components";
import { logo } from "../../assets";
const GetStarted = () => {
  return (
    <>
      <div className="empty"></div>
      <section className="getStarted__section">
        <Link to={"/"} className="nav__logo">
          <img src={logo} alt="nav__logo" />
          <h3>HelpMeOut</h3>
        </Link>

        <LogInCard />
      </section>
    </>
  );
};

export default GetStarted;
