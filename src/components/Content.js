import React from "react";
import Typical from "react-typical";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import {HiOutlineChevronDoubleDown} from 'react-icons/hi';

export default function Content() {
  return (
    <div className="content-container">
      <div className="text-container">
        <p>I'm</p>
          <Typical className="animated-text"
            loop={Infinity}
            steps={[
              "Full Stack Developer",
              1000,
              "Computer Science Student",
              1000,
            ]}
            wrapper="p"
          />
      </div>
      <div className="logos">
        <a href="https://www.instagram.com/mericbulca/">
          <BsInstagram className="logo instagram" />
        </a>
        <a href="https://www.linkedin.com/in/meri%C3%A7-bulca-59688517b/">
          <BsLinkedin className="logo linkedin" />
        </a>
        <a href="https://www.twitter.com/mericmertbulca">
          <BsTwitter className="logo twitter" />
        </a>
      </div>
      <a href="#card">
      <HiOutlineChevronDoubleDown className="logo cursor"/>
        </a>
    </div>
  );
}
