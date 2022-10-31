import { Link } from "react-router-dom";

import FooterLinks from "../../components/FooterLinks/FooterLinks";
import NavBar4 from "../../components/Navbar4/Navbar4";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homepage-nav">
        <NavBar4 />
      </div>
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
      </div>
      <FooterLinks />
    </>
  );
};

export default Home;
