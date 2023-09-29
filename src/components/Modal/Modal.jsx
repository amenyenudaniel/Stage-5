import "./Modal.css";
import { kite, closeCircle } from "../../assets";
import { Link } from "react-router-dom";
const Modal = ({ setShowModal, email }) => {
  return (
    <section className="section__modal">
      <div className="modal__box">
        <img
          src={closeCircle}
          alt="close__icon"
          className="close__icon"
          onClick={() => {
            setShowModal(false);
          }}
        />
        <div className="modal__kite">
          <img src={kite} alt="Kite__Image" className="kite__image" />
        </div>

        <p className="to__email">
          Your video link has been sent
          <br /> to <span>{email}</span>
        </p>
        <small>
          Would you need to view this video later?
          <br /> Save to your account now!
        </small>

        <button onClick={() => setShowModal(false)}>Save Video</button>
        <Link to={"/signUp/logIn"} className="modal__account link__tag">
          Don’t have an account? <span>Create account</span>
        </Link>
      </div>
    </section>
  );
};

export default Modal;
