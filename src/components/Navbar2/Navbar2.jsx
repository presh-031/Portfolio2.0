import { NavLink } from "react-router-dom";

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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/resume">Resume</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
