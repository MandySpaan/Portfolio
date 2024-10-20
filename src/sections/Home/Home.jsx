import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="home-section">
          <img
            src="/images/profile-photo.png"
            alt="Mandy Spaan"
            className="home-photo"
          />
          <div className="home-text">
            <h1>Mandy Spaan</h1>
            <h2>
              Full Stack<span className="space"> </span>/
              <span className="space"> </span>Frontend
              <span className="space"> </span>/<span className="space"> </span>
              Backend Developer
            </h2>
            <p>
              Having recently completed an intensive
              <span className="line-break-small">
                <br />
              </span>{" "}
              Full-Stack Development{" "}
              <span className="line-break">
                <br />
              </span>
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
      <Footer />
    </>
  );
};

export default Home;
