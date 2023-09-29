import "./Home.css";
import { Hero, Features, HowItsWorks, Footer, Navbar } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItsWorks />
      <Footer />
    </div>
  );
};

export default Home;
