import React from "react";
import "../assets/css/footer.css";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn, FaWeight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="containerFooter">
      <div className="icons">
        <a target="_blank" href="mailto:martorano.javi@gmail.com">
          <HiMail size={"2em"} className="contactIcon" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/javiermartorano/">
          <FaLinkedinIn size={"2em"} className="contactIcon" />
        </a>
        <a target="_blank" href="https://github.com/JavierMartorano">
          <FiGithub size={"2em"} className="contactIcon" />
        </a>
      </div>
      <div className="copyright">
        <p>© 2022 Copyright Javier Martorano</p>
      </div>
    </section>
  );
};

export default Footer;
