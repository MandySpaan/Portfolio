import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>On my Developer Journey</h2>
          <p>
            I've explored a lot of different industries before landing on
            software development, from television and marketing to hospitality
            and more. I've always been someone who focuses on growth and
            learning, and I'm excited to have finally found a field where the
            limits for this seem endless.
            <br />
            <br />A year ago, I took my first real step into tech with an online
            Frontend Developer course from Meta. Finishing that course only
            fueled my curiosity further, leading me to enroll in a Full Stack
            Development bootcamp. The experience has been quite a whirlwind,
            throwing me headfirst into the developer world.
            <br />
            <br />I won't sugarcoat it, there have been moments when I felt like
            tossing my laptop (or myself) out the window. But the challenges
            have been worth it! The progress I've made over the last year, often
            spending over 11 hours a day coding, has been immensely rewarding.
            Now, I'm excited to apply my skills in a developer role where I can
            continue to grow and learn in a field with endless opportunities.
          </p>
        </div>
        <hr className="separator" />
        <div className="about-stack">
          <h2>Main Technology Stack</h2>
          <p>The technologies I have worked with most</p>
          <div className="about-stack-icons">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              alt="JavaScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
              alt="TypeScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              alt="React"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              alt="Node.js"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
              alt="npm"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
              alt="Express"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              alt="MySQL"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
              alt="MongoDB"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg"
              alt="Mongoose"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
              alt="Git"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
