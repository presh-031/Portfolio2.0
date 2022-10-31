import FooterLinks from "../FooterLinks/FooterLinks";
import NavBar4 from "../Navbar4/Navbar4";
import "./Projects2.css";

const Projects2 = () => {
  return (
    <div className="projects-page">
      <div className="projects-page-nav-container">
        <NavBar4 />
      </div>
      <div className="page-title">
        <p>
          <span>{`{`}</span> projects <span>{`}`}</span>
        </p>
      </div>
      <div className="projects">
        <div className="project-card">
          {/* <div> */}
          <p>Movie Guru</p>
          <p>Full stack movie-info app built with React, Node.js ,Express.js, and Mongo db.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>

        <div className="project-card">
          {/* <div> */}
          <p>World Countries</p>
          <p>
            Rest countries info app built with Javascript, SCSS, CSS custom properties, Flexbox, Grid, semantic HTML.
          </p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>

        <div className="project-card">
          {/* <div> */}
          <p>Windbnb</p>
          <p>A smaller version of airbnb - windbnb, built with React.js</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>

        <div className="project-card">
          {/* <div> */}
          <p>IP Address Tracker</p>
          <p>IP Address tracker and geolocation detector app.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>

        <div className="project-card">
          {/* <div> */}
          <p>Sunnyside Page</p>
          <p>Landing page built with react, react hooks, and tailwind css.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>

        <div className="project-card">
          {/* <div> */}
          <p>URL Shortening Page</p>
          <p>Landing page built with Javascript, HTML and CSS, with URL Shortening functionality.</p>
          {/* </div> */}
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>

        <div className="project-card">
          {/* <div> */}
          <p>Quotes Generator</p>
          <p>Famous quotes app built with React, React Hooks, API, Axios, CSS, LocalStorage, and React-icons.</p>
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
          <p>Bill splitter </p>
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
