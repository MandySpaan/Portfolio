import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects-content">
        <p>
          Here you will find some of the projects I have been working on.
          <span className="line-break">
            <br />
          </span>{" "}
          For all my projects, please visit{" "}
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
            <h3>Las Naves Coworking Space</h3>
            <img
              src="/images/project-lasnaves.png"
              alt="Empanada Challenge Project"
            />
            <div className="project-tile-text">
              Access control and management app for a coworking space: Users can
              register, check in/out of rooms, make reservations, and view
              real-time room availability.
            </div>
            <hr className="separator" />
            <div className="box-stack-buttons">
              <div className="stack-button">
                <div className="stack">
                  Frontend Stack
                  <br />
                  React, TypeScript, Node.js, npm, CSS
                </div>
                <a
                  href="https://github.com/MandySpaan/LasNaves_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Go to Frontend Project</button>
                </a>
              </div>
              <hr className="separator-vertical" />
              <div className="stack-button">
                <div className="stack">
                  Backend Stack <br />
                  TypeScript, Node.js, npm, Express, MongoDB
                </div>
                <a
                  href="https://github.com/MandySpaan/LasNaves_Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Go to Backend Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-tile">
            <h3>GeekTok Social Media</h3>
            <img
              src="/images/project-geektok2.png"
              alt="Empanada Challenge Project"
            />
            <div className="project-tile-text">
              A social media platform for technology fans: Users can register,
              log in, access the network, post, follow each other and interact.
            </div>
            <hr className="separator" />
            <div className="box-stack-buttons">
              <div className="stack-button">
                <div className="stack">
                  Frontend Stack <br />
                  React, TypeScript, Node.js, npm, CSS
                </div>
                <a
                  href="https://github.com/MandySpaan/SocialMedia_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Go to Frontend Project</button>
                </a>
              </div>
              <hr className="separator-vertical" />
              <div className="stack-button">
                <div className="stack">
                  Backend Stack <br />
                  JavaScript, Node.js, npm, Express, MongoDB
                </div>

                <a
                  href="https://github.com/MandySpaan/SocialMedia_Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Go to Backend Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-tile">
            <h3>Tattoo Paradise</h3>
            <img
              src="/images/project-tattooparadise.png"
              alt="Empanada Challenge Project"
            />
            <div className="project-tile-text">
              Appointment management for a tattoo studio: Users can (among other
              things) register, log in, view a list of scheduled appointments
              and create new appointments.
            </div>
            <hr className="separator" />
            <div className="box-stack-buttons">
              <div className="stack-button">
                <div className="stack">
                  Frontend Stack <br />
                  React, JavaScript, CSS, Node.js, npm
                </div>
                <a
                  href="https://github.com/MandySpaan/TattooStudio_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Go to Frontend Project</button>
                </a>
              </div>
              <hr className="separator-vertical" />
              <div className="stack-button">
                <div className="stack">
                  Backend Stack
                  <br />
                  TypeScript, Node.js, npm, Express, MySQL
                </div>
                <a
                  href="https://github.com/MandySpaan/TattooStudio_Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Go to Backend Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-tile">
            <h3>Empanada Challenge</h3>
            <img
              src="/images/project-empanadas.png"
              alt="Empanada Challenge Project"
            />
            <div className="project-tile-text">
              Project to practice problem solving skills by using JS to
              calculate how to achieve the best possible deals for a combination
              3 for 1 empanada promotion.
            </div>
            <div className="stack">Stack: JavaScript, Jest</div>
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
              src="/images/project-interactivetv.png"
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
            <div className="stack">Stack: JavaScript, HTML, CSS</div>
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
              src="/images/project-cutecakes.png"
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
            <div className="stack">Stack: HTML, CSS, Bootstrap</div>
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
