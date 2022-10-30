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
          <Hamburger toggled={isOpen} size={40} toggle={setOpen} label="menu" hideOutline={true} />
        </div>
      </nav>
      {/* {isOpen &&  */}
      <div class="menu-items">
        <NavLink
          to="/"
          onClick={() => {
            setOpen(false);
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => {
            setOpen(false);
          }}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          onClick={() => {
            setOpen(false);
          }}
        >
          Projects
        </NavLink>

        <NavLink
          to="/resume"
          onClick={() => {
            setOpen(false);
          }}
        >
          Resume
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => {
            setOpen(false);
          }}
        >
          Contact
        </NavLink>
      </div>
      {/* } */}
    </header>
  );
};

export default Navbar2;
