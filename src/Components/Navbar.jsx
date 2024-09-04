import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-10 text-4xl">Portfolio</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shivek-soni-b860ab170/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/shivek-cmd"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub Profile"
        >
          <FaGithub />
        </a>

        <a
          href="https://instagram.com/shivek_soni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram Profile"
        >
          <FaInstagram />
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1p_b08IpyZmwPzHJUSlOo2ijpMtdMzOci
"
          target="_blank"
          download="Resume.pdf"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Download Resume"
        >
          <FaFileAlt />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
