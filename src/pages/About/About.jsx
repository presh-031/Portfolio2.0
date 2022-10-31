import FooterLinks from "../../components/FooterLinks/FooterLinks";

import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-main">
        <p>
          I am a self-motivated fullstack developer currently working with web technologies such as{" "}
          <span>Javascript</span>, <span>React</span>, <span>Node</span>, <span>Express</span>.
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
          My goal is to gain enough experience to be regarded as one of the best software engineers in the world. Hence,
          my main focus is currently only on what I do!
        </p>
        <p>Below are all the technologies I work with or I'm familiar with:</p>
        <ul>
          <li>Git and Github</li>
          <li>Next</li>
          <li>Express</li>
          <li>Node</li>
          <li>Javascript(ES6+)</li>
          <li>Web flow</li>
          <li>SCSS</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Mongo db</li>
          <li>Bootstrap</li>
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
      <FooterLinks />
    </div>
  );
};

export default About;
