import React from "react";
import "../assets/css/footer.css";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="containerFooter">
      <div className="icons">
        <span>
          <HiMail size={"2em"} className="contactIcon" />
        </span>
        <span>
          <FaLinkedinIn size={"2em"} className="contactIcon" />
        </span>
        <span>
          <FiGithub size={"2em"} className="contactIcon" />
        </span>
      </div>
      <div className="copyright">
        <p>© 2022 Copyright Javier Martorano</p>
      </div>
    </section>
  );
};

export default Footer;
