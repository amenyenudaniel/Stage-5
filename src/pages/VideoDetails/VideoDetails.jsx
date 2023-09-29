import "./VideoDetails.css";
import { Nav } from "../../components";
import { edit } from "../../assets";
const VideoDetails = () => {
  return (
    <>
      <div className="empty"></div>
      <section className="videoDetail__section">
        <Nav />

        <small>
          Home / Recent Videos /{" "}
          <span>How To Create A Facebook Ad Listing</span>
        </small>
        <div className="edit__box">
          <p>How To Create A Facebook Ad Listing</p>
          <img src={edit} alt="edit__image" />
        </div>
      </section>
    </>
  );
};

export default VideoDetails;
