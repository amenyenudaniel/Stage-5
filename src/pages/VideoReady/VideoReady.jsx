import { copy, edit, fb, telegram, whatsapp } from "../../assets";
import { Footer, Modal, Navbar } from "../../components";
import { useCopyToClipboard } from "usehooks-ts";
import "./VideoReady.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const VideoReady = () => {
  const [value, copyValue] = useCopyToClipboard();
  const [linkValue, setLinkValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
const fetch(`https://druth-video-api.onrender.com/get_video/${link}`)
  }, [])
  return (
    <div
      style={{
        overflow: showModal && "hidden",
        height: showModal && "100vh",
      }}
    >
      <Navbar />
      <div className="videoReady">
        <div className="videoReady__content">
          <h1>Your video is ready!</h1>
          <p className="name">Name</p>
          <div className="videoReady__name">
            <h2>Untitled_Video_20232509</h2>
            <img src={edit} alt="edit__icon" />
          </div>

          <div className="videoReady__email">
            <input
              type="email"
              placeholder="enter email of receiver"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => {
                setShowModal(true);
              }}
            >
              Send
            </button>
          </div>

          <h3 className="videoURL">Video Url</h3>
          <div className="videoUrl">
            <input
              type="text"
              onChange={(e) => setLinkValue(e.target.value)}
              value={linkValue}
            />
            <div
              className="copyBtn"
              onClick={() => {
                copyValue(linkValue);
                alert("Copied Successfully");
              }}
            >
              <img src={copy} alt="copy__image" />
              <p>Copy</p>
            </div>
          </div>

          <h4 className="Share">Share your video</h4>
          <div className="social__links">
            <div>
              <img src={fb} alt="facebook__icon" /> <p>Facebook</p>
            </div>
            <div>
              <img src={whatsapp} alt="whatsapp__icon" /> <p>Facebook</p>
            </div>
            <div>
              <img src={telegram} alt="telegram__icon" /> <p>Facebook</p>
            </div>
          </div>
        </div>
        <div className="videoReady__video">

        </div>
      </div>
      <div className="save__container">
        <p>
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </p>
        <button>Save Video</button>

        <h4 className="h4__Text">
          Don’t have an account?{" "}
          <Link to={"/signUp/LogIn"} className="link__tag">
            <span>Create account</span>
          </Link>
        </h4>
      </div>
      <div className="footer__video">
        <Footer />
      </div>

      {showModal && <Modal setShowModal={setShowModal} email={email} />}
    </div>
  );
};

export default VideoReady;
