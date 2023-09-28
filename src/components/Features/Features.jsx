import "./Features.css";
import { featureImg } from "../../assets";
import { featureData } from "../../utils/data";
const Features = () => {
  return (
    <section className="feature__section">
      <h1>Features</h1>
      <p>Key Highlights of Our Extension</p>

      <div className="feature__main">
        <div className="feature__content">
          {featureData.map((feature) => (
            <div key={feature.id} className="feature__card">
              <div className="feature__icon">
                <img src={feature.icon} alt="feature__icon" />
              </div>
              <div className="feature__title">
                <h2>{feature.title}</h2>
                <p>{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={featureImg} alt="Feature Main Image" />
      </div>
    </section>
  );
};

export default Features;
