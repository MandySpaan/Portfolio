import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects-content">
        <p>
          Underneath you will find some of the projects I have been working on.
          <br />
          For all my projects, please visit my{" "}
          <a
            href="https://github.com/MandySpaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/MandySpaan
          </a>
          .
        </p>
        <div className="project-tiles">
          <div className="project-tile">
            <h3>Empanada Challenge</h3>
            <img
              src="src/assets/images/project-empanadas.png"
              alt="Empanada Challenge Project"
            />
            <div className="project-tile-text">
              Project to practice problem solving skills by using JS to
              calculate how to achieve the best possible deals for a combination
              3 for 1 empanada promotion.
            </div>
            <div>Stack: JavaScript, Jest</div>
            <a
              href="https://github.com/MandySpaan/Empanadas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Go to Project</button>
            </a>
          </div>
          <div className="project-tile">
            <h3>Interactive Television</h3>
            <img
              src="src/assets/images/project-interactivetv.png"
              alt="Interactive TV Project"
            />
            <div className="project-tile-text">
              Project that simulates an interactive TV with a remote control, to
              practice with JavaScript and CSS. <br /> Click{" "}
              <a
                href="https://mandyspaan.github.io/InteractiveTV/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to view the Interactive TV.
            </div>
            <div>Stack: JavaScript, HTML, CSS</div>
            <a
              href="https://github.com/MandySpaan/InteractiveTV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Go to Project</button>
            </a>
          </div>
          <div className="project-tile">
            <h3>CuteCakes Basic Website</h3>
            <img
              src="src/assets/images/project-cutecakes.png"
              alt="Cute Cakes Basic Website Project"
            />
            <div className="project-tile-text">
              My first project to practice the very basics of HTML and CSS. A
              simple website for a fictional cupcakes store. Click{" "}
              <a
                href="https://mandyspaan.github.io/CuteCakes_BasicWebsite/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to visit the CuteCake website.
            </div>
            <div>Stack: HTML, CSS, Bootstrap</div>
            <a
              href="https://github.com/MandySpaan/CuteCakes_BasicWebsite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Go to Project</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
