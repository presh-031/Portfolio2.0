import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

import "./Navbar3.css";
const Navbar2 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div class=" nav-container">
          <Hamburger toggled={isOpen} toggle={setOpen} label="menu" hideOutline={true} />
          <div class="logo">
            <h1>[# 031]</h1>
          </div>
        </div>
        {isOpen && (
          <div class="menu-items">
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => {
                  setOpen(false);
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Contact
              </NavLink>
            </li>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar2;
