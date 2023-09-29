import { search } from "../../assets";
import { Footer, Nav } from "../../components";
import "./Video.css";
import { useState } from "react";
const Video = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="empty"></div>
      <div className="line__padding">
        <div className="section__video">
          <Nav />
          <div className="video__welcome">
            <div className="name__video">
              <h1>Hello, John Mark</h1>
              <p>Here are your recorded videos</p>
            </div>
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search for a particular video"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <img src={search} alt="search__image" />
            </div>
          </div>
        </div>
      </div>
      <div className="line__recent"></div>
      <p className="recent">Recent files</p>
      <Footer />
    </>
  );
};

export default Video;
