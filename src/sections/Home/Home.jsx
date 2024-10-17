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
            <h2>Full Stack / Frontend / Backend Developer</h2>
            <p>
              Having recently completed an intensive Full-Stack Development
              bootcamp, I'm eager to continue immersing myself in
              <span className="line-break">
                <br />
              </span>{" "}
              web technologies and apply my skills through{" "}
              <span className="line-break">
                <br />
              </span>
              exciting new opportunities.
            </p>
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
