import FooterLinks from "../../components/FooterLinks/FooterLinks";

import ipTracker from "../../assets/ip-tracker.jpg";
import sunnyside from "../../assets/sunnyside.jpg";
import weather from "../../assets/weather.jpg";
import edie from "../../assets/edie.jpg";
import rps from "../../assets/rps.jpg";
import tipCalc from "../../assets/tip-calc.jpg";
import advice from "../../assets/advice.jpg";

import "./Projects.css";
const Projects = () => {
  return (
    <>
      {/* <!-- 1. IP Tracker Project --> */}
      <div class="project">
        <div>
          <img src={ipTracker} alt="ip-tracker" />
        </div>
        <div class="description">
          <p class="title">IP Address Tracker App</p>
          <p>
            <span class="underlined">Built with</span> :
          </p>
          <ul class="tools">
            <li>
              <span class="bold">Javascript</span>
            </li>
            <li>
              IP Geolocation <span class="bold">API</span> by IPify
            </li>
            <li>
              Leaflet.js <span class="bold">Library</span>
            </li>
            <li class="bold">Fetch & Async await</li>
            <li>
              <span class="bold">Mobile-First</span> Workflow
            </li>
          </ul>
          <p class="underlined">Features</p>
          <ul class="features">
            <li>You can see your own IP Address on initial page load.</li>
            <li>User can search for any IP Address and see key information and location.</li>
            <li>Click on the map to show you the exact latitude and longitude of the point clicked, in a popup.</li>
            <li>
              The location-icon shows the location of the IP Address, and a popup on it shows the IP currently being
              located.
            </li>
            <li>
              When a wrong IP Address is inputted or there's an error in loading the IP's information, an error popup
              shows up.
            </li>
            <li>Responsive for all device widths.</li>
          </ul>
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
      </div>

      {/* <!-- 2.Sunnyside Landing Page --> */}
      <div class="project" data-aos="fade-right">
        <div>
          <img src={sunnyside} />
        </div>
        <div class="description">
          <p class="title">Sunnyside Landing Page</p>
          <p>
            <span class="underlined">Built with</span> :
          </p>
          <ul class="tools">
            <li>
              <span class="bold">React.js</span>
            </li>
            <li>
              <span class="bold">React Hook</span>
            </li>
            <li>
              <span class="bold">Tailwind css</span>
            </li>
            <li>
              <span class="bold">Mobile-First</span> Workflow
            </li>
          </ul>
          <p class="underlined">Features</p>
          <ul class="features">
            <li>Header, Hero, About, Testimonials, Gallery and Footer sections.</li>
            <li>Single-page</li>
            <li>Mobile Navigation menu.</li>
            <li>Responsive for all device widths.</li>
          </ul>
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
      </div>

      {/* <!-- 3.Weather App Project --> */}
      <div class="project" data-aos="fade-left">
        <div>
          <img src={weather} />
        </div>
        <div class="description">
          <p class="title">Simple Weather App</p>
          <p>
            <span class="underlined">Built with</span> :
          </p>
          <ul class="tools">
            <li>
              <span class="bold">Javascript</span>
            </li>
            <li></li>
            <li>
              <span class="bold">Fetch</span> and <span class="bold">DOM APIs</span>
            </li>
            <li class="bold">SCSS</li>
            <li>
              <span class="bold">Mobile-First</span> Workflow
            </li>
          </ul>
          <p class="underlined">Features</p>
          <ul class="features">
            <li>
              View any location's weather conditions :
              <ul>
                <li>Actual Temperature</li>
                <li>What the temperature feels like</li>
                <li>Humidity</li>
                <li>Wind speed</li>
              </ul>
            </li>
            <li>Temperature convertion.</li>
            <li>Loading spinner.</li>
            <li>Responsive for all device widths.</li>
          </ul>
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
      </div>

      {/* <!-- 4.Edie Homepage --> */}
      <div class="project" data-aos="fade-right">
        <div>
          <img src={edie} />
        </div>
        <div class="description">
          <p class="title">Edie Homepage</p>
          <p>
            <span class="underlined">Built with</span> :
          </p>
          <ul class="tools">
            <li>
              <span class="bold">Javascript</span>
            </li>
            <li>
              <span class="bold">Semantic </span>HTML
            </li>
            <li>
              <span class="bold">SCSS</span>
            </li>
            <li>
              <span class="bold">Flexbox</span> and <span class="bold">Grid</span>
            </li>
            <li>
              <span class="bold">Figma</span>
            </li>
            <li>
              <span class="bold">BEM</span> methodology
            </li>
            <li>
              <span class="bold">Mobile-First</span> Workflow
            </li>
          </ul>
          <p class="underlined">Features</p>
          <ul class="features">
            <li>Pixel-Perfect replica of the figma design,both on mobile and desktop.</li>
            <li>Header, Hero, Services, Projects, Meet-the-Team, Testimonial and Footer sections.</li>
            <li>Mobile Navigation menu</li>

            <li>Responsive for all device widths.</li>
          </ul>
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
      </div>

      {/* <!-- 4.Rock-Paper-Scissors --> */}
      <div class="project" data-aos="fade-left">
        <div>
          <img src={rps} />
        </div>
        <div class="description">
          <p class="title">Rock-Paper-Scissors game</p>
          <p>
            <span class="underlined">Built with</span> :
          </p>
          <ul class="tools">
            <li>
              <span class="bold">Javascript</span>
            </li>
            <li>
              <span class="bold">Semantic</span> HTML
            </li>
            <li>
              <span class="bold">SCSS</span>
            </li>
            <li>
              <span class="bold">DOM</span> and <span class="bold">setTimeout </span>APIs
            </li>
            <li>
              <span class="bold">BEM</span> methodology
            </li>
            <li>
              <span class="bold">Mobile-First</span> Workflow
            </li>
          </ul>
          <p class="underlined">Features</p>
          <ul class="features">
            <li>
              Play unlimited rounds of rock-paper-scissors game against the computer (Sorry, it often beats me too).
            </li>
            <li>Each round is won by the first to score 5 points.</li>
            <li>'Play again' modal pops-up at the end of every round, to restart the game when you're ready.</li>
            <li>Responsive for all device widths.</li>
          </ul>
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
      </div>

      {/* <!-- 5.Tip Calculator --> */}
      <div class="project" data-aos="fade-right">
        <div>
          <img src={tipCalc} />
        </div>
        <div class="description">
          <p class="title">Tip-Calculator and Bill-Splitter App</p>
          <p>
            <span class="underlined">Built with</span> :
          </p>
          <ul class="tools">
            <li>
              <span class="bold">Javascript</span>
            </li>
            <li>
              <span class="bold">Semantic</span> HTML
            </li>
            <li>
              <span class="bold">SCSS</span>
            </li>
            <li>
              <span class="bold">Grid</span>
            </li>
            <li>
              <span class="bold">Desktop-First</span> Workflow
            </li>
          </ul>
          <p class="underlined">Features</p>
          <ul class="features">
            <li>
              Calculate the correct tip/person and total cost/person, based on the original bill, number of people and
              tip%.
            </li>
            <li>Use any custom tip% to calculate.</li>
            <li>Interactive elements on the page for the best user experience.</li>
            <li>No 'equal to' button, it calculates with every digit you input, hence highly interactive.</li>
            <li>Responsive for all device widths.</li>
          </ul>
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
      </div>

      {/* <!-- 6.Random Advice Generator. --> */}
      <div class="project" data-aos="fade-left">
        <div>
          <img src={advice} />
        </div>
        <div class="description">
          <p class="title">Random Advice Generator App</p>
          <p>
            <span class="underlined">Built with</span> :
          </p>
          <ul class="tools">
            <li>
              <span class="bold">Javascript</span>
            </li>
            <li>
              <span class="bold">Fetch</span> and <span class="bold">DOM APIs</span>
            </li>
            <li>
              <span class="bold">SCSS</span>
            </li>
            <li>
              <span class="bold">CSS Grid</span>
            </li>
            <li>
              <span class="bold">Mobile-First</span> Workflow
            </li>
          </ul>
          <p class="underlined">Features</p>
          <ul class="features">
            <li>Generate random quotes / advice from an external API.</li>
            <li>Hover interaction on the 'dice' botton.</li>
            <li>Responsive for all device widths.</li>
          </ul>
          <div class="project-links">
            <a href="">Demo</a>
            <a href="">&#60;Code /&#62;</a>
          </div>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default Projects;
