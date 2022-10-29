import { Link } from "react-router-dom";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import "./Home.css";

const Home = () => {
  return (
    <>
      {" "}
      <div class="overall">
        <section>
          <h1 class="hello">&#60; Hello, I'm / &#62;</h1>
          <ul class="intro">
            <li class="intro__name">
              Akingbulugbe <span class="underlined">Precious</span>
            </li>
            <li class="intro__role">Frontend Developer</li>
          </ul>
          <ul class="homepage-links">
            <div>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </div>
          </ul>
        </section>
        {/* <!-- Footer-Links section --> */}
        <section class="links homepage-footer-links">
          <div>
            <BsGithub className="footer-link" />
          </div>
          <div>
            <AiOutlineMail className="footer-link" />
          </div>
          <div>
            <BsTwitter className="footer-link" />
          </div>
        </section>
      </div>
      {/* // <!-- Footer, attribution --> */}
      <footer class="main-footer">
        <p>
          Inspired by{" "}
          <a href="https://www.rlmoser.com" target="_blank" rel="noreferrer">
            Rachel Moser
          </a>{" "}
          - with permission.
        </p>
      </footer>
    </>
  );
};

export default Home;
