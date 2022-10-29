import "./Navbar2.css";
const Navbar2 = () => {
  return (
    <header>
      <nav>
        <div class="navbar">
          <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <div class="logo">
              <h1>[# 031]</h1>
            </div>
            <div class="menu-items">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="./about.html">about</a>
              </li>
              <li>
                <a href="./projects.html">projects</a>
              </li>
              <li>
                <a href="#">resume</a>
              </li>
              <li>
                <a href="./contact.html">contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
