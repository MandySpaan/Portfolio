import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <p className="contact-intro">
        Feel free to contact me through{" "}
        <a
          href="https://www.linkedin.com/in/mandyspaan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        <br />
        or you can also find my contact info on my CV
      </p>
      <div className="contact-content">
        <div className="contact-links">
          <div className="contact-link-box">
            <img
              src="src/assets/images/contact-download.png"
              alt="Download CV"
            />
            <div className="contact-link-text">CV in English</div>
          </div>{" "}
          <div className="contact-link-box">
            <img
              src="src/assets/images/contact-download.png"
              alt="Download CV"
            />
            <div className="contact-link-text">CV en Español</div>
          </div>{" "}
          <div className="contact-link-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            <div className="contact-link-text">GitHub Page</div>
          </div>{" "}
          <div className="contact-link-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
            <div className="contact-link-text">LinkedIn Page</div>
          </div>
        </div>
        <div className="contact-cv">
          <img src="src/assets/images/contact-cv.png" alt="CV Resume" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
