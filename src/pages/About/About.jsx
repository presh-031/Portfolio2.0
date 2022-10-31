import Navbar4 from "../../components/Navbar4/Navbar4";

import FooterLinks from "../../components/FooterLinks/FooterLinks";

import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-nav-container">
        <Navbar4 />
      </div>
      <div className="page-title">
        <p>
          <span>{`{`}</span> about <span>{`}`}</span>
        </p>
      </div>
      <div>
        <div className="about-page-main">
          <p>
            I am a self-motivated and detail-oriented frontend-inclined FULLSTACK developer currently working with web
            technologies such as <span>Javascript</span>, <span>React</span>, <span>Node</span>, <span>Express</span>.
          </p>
          <p>
            I have a well rounded understanding of both <span>frontend</span> and <span>backend</span> technologies
            necessary for modern web application construction and maintenance.
          </p>
          <p>
            I am a wiz at finding solutions, contributing to a collaborative work environment and ensuring employer's
            satisfaction.
          </p>
          <p>
            My goal is to gain enough experience to be regarded as one of the best software engineers in the world.
            Hence, my main focus is currently only on what I do!
          </p>
          <p>Below are all the technologies I work with or I'm familiar with:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Web flow</li>
            <li>Javascript(ES6+)</li>
            <li>API</li>
            <li>React</li>
            <li>Next</li>
            <li>Node</li>
            <li>Express</li>
            <li>Mongo db</li>
            <li>npm</li>
            <li>Git and Github</li>
          </ul>
          <p>
            Here's a particular one worth mentioning: <span>Google</span>.
          </p>
          <p>
            Fun fact about me as a developer:
            <p>
              I am secretly motivated by the fact that the internet is held together by duct-tape and chewing gum. This
              fact, keeps me going, as a developer.
            </p>
          </p>
        </div>
        <div className="personality-img-container">{/* <img src="" alt="personality-img" /> */}</div>
      </div>{" "}
      <FooterLinks />
    </div>
  );
};

export default About;
