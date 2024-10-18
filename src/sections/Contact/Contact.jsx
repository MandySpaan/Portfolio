import "./Contact.css";

const Contact = () => {
  const DownloadEnglishCV =
    "https://drive.google.com/uc?export=download&id=1OMWBoSI88RjTBahwzGtElAd_WiwNPvX3";

  const DownloadSpanishCV =
    "https://drive.google.com/uc?export=download&id=1gQCp5S51cGYP90kIgfW9s7_6kVcs0gIb";

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
        or you can find my contact info on my CV.
      </p>
      <div className="contact-content">
        <div className="contact-links">
          <a href={DownloadEnglishCV} download>
            <div className="contact-link-box">
              <img
                src="/images/contact-download.png"
                alt="Download English CV"
              />
              <div className="contact-link-text">CV in English</div>
            </div>
          </a>
          <a href={DownloadSpanishCV} download>
            <div className="contact-link-box">
              <img
                src="/images/contact-download.png"
                alt="Download Spanish CV"
              />
              <div className="contact-link-text">CV en Español</div>
            </div>
          </a>
          <div className="contact-link-box">
            <a
              href="https://github.com/MandySpaan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
              <div className="contact-link-text">GitHub Page</div>
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/mandyspaan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-link-box">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
              <div className="contact-link-text">LinkedIn Page</div>
            </div>
          </a>
        </div>
        <img
          className="contact-cv-img"
          src="/images/contact-cv.png"
          alt="CV Resume"
        />
      </div>
    </div>
  );
};

export default Contact;
