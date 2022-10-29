import { Link } from "react-router-dom";

import Unique from "../../assets/031.png";
import FooterLinks from "../../components/FooterLinks/FooterLinks";
import "./Home.css";

const Home = () => {
  return (
    <div class="home-page">
      <div className="main">
        <section className="intro">
          <p class="intro__name">Akingbulugbe Precious.</p>
          <p class="intro__role">Fullstack Developer.</p>
          <p class="intro__role">Builder.</p>
        </section>

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
      </div>
      <FooterLinks />
    </div>
  );
};

export default Home;
