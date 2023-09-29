import "./HowItsWorks.css";
import { works } from "../../assets";
import { howItWorksData } from "../../utils/data";
const HowItsWorks = () => {
  return (
    <section className="section__works" id="works">
      <h1>How it works</h1>

      <div className="works__container">
        {howItWorksData.map((work) => (
          <div key={work.id} className="works__card">
            <div className="works__icon">
              <p>{work.icon}</p>
            </div>
            <h2 className="work__title">{work.title}</h2>
            <p className="work__paragraph"> {work.content}</p>
            <img className="svg__work" src={works} alt="work__image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItsWorks;
