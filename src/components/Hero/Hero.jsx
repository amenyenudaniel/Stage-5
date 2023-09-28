import "./Hero.css";
import { arrowRight, hero1, hero2, hero3, grid1, grid2 } from "../../assets";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="hero__contents">
        <h1>
          Show Them <br className="break__tag-hero" />
          Don’t Just Tell
        </h1>
        <p>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button>
          Install HelpMeOut <img src={arrowRight} alt="arrow__image" />
        </button>
      </div>
      <div className="hero__images">
        <div className="hero__grid1">
          <img src={hero1} alt="image__people" />
          <img src={hero2} alt="image__people" />
        </div>
        <div className="hero__grid2">
          <img src={hero3} alt="image__people" />
        </div>
        <img src={grid1} alt="image__overlay" className="grid1" />
        <img src={grid2} alt="image__overlay" className="grid2" />
      </div>
    </section>
  );
};

export default Hero;
