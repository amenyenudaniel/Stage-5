import "./Footer.css";
import { logoWhite } from "../../assets";
import { footerData } from "../../utils/data";
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="logo__footer">
        <img src={logoWhite} alt="Footer__Logo" />
        <h2>HelpMeOut</h2>
      </div>

      <div className="footer__links">
        {footerData.map((item) => (
          <div className="footer__card" key={item.id}>
            <p className="footer__link__title">{item.title}</p>
            {item.links.map((link) => (
              <p className="footer__linkName" key={link.id}>
                {link.linkName}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
