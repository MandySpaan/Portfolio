import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="home-section">
          <img
            src="src/assets/images/profile-photo.png"
            alt="Mandy Spaan"
            className="home-photo"
          />
          <div className="home-text">
            <h1>Mandy Spaan</h1>
            <p>Full Stack / Frontend / Backend Developer</p>
          </div>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
