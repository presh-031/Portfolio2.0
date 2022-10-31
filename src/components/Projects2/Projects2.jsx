import FooterLinks from "../FooterLinks/FooterLinks";
import "./Projects2.css";

const Projects2 = () => {
  return (
    <div className="projects-page">
      <div className="projects">
        <div className="project-card">
          {/* <div> */}
          <p>IP Address Tracker</p>
          <p>IP Address tracker and geolocation detector</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>

        <div className="project-card">
          {/* <div> */}
          <p>Sunnyside Landing page</p>
          <p>Landing page built with react, react hooks, and tailwind css.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
        <div className="project-card">
          {/* <div> */}
          <p>Weather app</p>
          <p>Weather app built with Javascript, SCSS, Fetch and DOM APIs.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
        <div className="project-card">
          {/* <div> */}
          <p>Edie's Homepage</p>
          <p>Homepage built with Javascript, Semantic HTML, SCSS, Flexbox, Grid, Figma and BEM methodology.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>

        <div className="project-card">
          {/* <div> */}
          <p>Rock Paper Scissors</p>
          <p>Player vs Computer game built with Javascript, semantic HTML, SCSS, DOM, and BEM methodology.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
        <div className="project-card">
          {/* <div> */}
          <p>Bill splitter and Tip calculator</p>
          <p>Bill splitter app built with Javascript, semantic HTML, SCSS, and css Grid.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
        <div className="project-card">
          {/* <div> */}
          <p>Advice Generator App</p>
          <p>Random advice generator app built with Javascript, Fetch and DOM APIs, SCSS, and CSS Grid.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
      </div>
      <FooterLinks />
    </div>
  );
};

export default Projects2;
