import { useState } from "react";
import { Link } from "react-scroll";
import useScrollSpy from "../../utils/useScrollSpy";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const sections = ["home", "about", "projects", "contact"];
  const activeSection = useScrollSpy(sections, 100);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Mandy Spaan</h1>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={`nav-link ${
            activeSection === "home" ? "active-nav-link" : ""
          }`}
          spy={true}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className={`nav-link ${
            activeSection === "about" ? "active-nav-link" : ""
          }`}
          spy={true}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className={`nav-link ${
            activeSection === "projects" ? "active-nav-link" : ""
          }`}
          spy={true}
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className={`nav-link ${
            activeSection === "contact" ? "active-nav-link" : ""
          }`}
          spy={true}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
