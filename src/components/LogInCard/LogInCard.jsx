import "./LogInCard.css";
import { fb, google } from "../../assets";
const LogInCard = () => {
  return (
    <div className="login__container">
      <section className="logIn__section">
        <h1>Log in or Sign Up</h1>
        <p>
          Join millions of others in sharing successful
          <br /> moves on <span>HelpMeOut</span>.
        </p>
        <div className="social">
          <img src={google} alt="google__logo" />
          <p>Continue with Google</p>
        </div>

        <div className="social ">
          <div className="fb">
            <img src={fb} alt="facebook__logo" />
            <p>Continue with Facebook</p>
          </div>
        </div>

        <div className="or__line">
          <div className="line__logIn"></div>
          <p>or</p>
          <div className="line__logIn"></div>
        </div>
      </section>
      <form className="logIn__form">
        <div className="email">
          <p>Email</p>
          <input type="email" placeholder="Enter your email address" required />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your Password"
            required
            min={5}
          />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default LogInCard;
