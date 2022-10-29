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
                <a href="./about.html">about</a>
              </li>
              <li>
                <a href="./projects.html">projects</a>
              </li>
            </div>
            <div>
              <li>
                <a href="#">resume</a>
              </li>
            </div>
          </ul>
        </section>
        {/* <!-- Footer-Links section --> */}
        <section class="links homepage-footer-links">
          <div>
            <i class="fa-brands fa-github"></i>
          </div>
          <div>
            <i class="fa-regular fa-envelope"></i>
          </div>
          <div>
            <i class="fa-brands fa-twitter"></i>
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
