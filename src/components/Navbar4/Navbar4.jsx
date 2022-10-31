import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Squash as Hamburger } from "hamburger-react";
import "./Navbar4.css";
function NavBar4() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo" onClick={handleClick}>
            <Hamburger toggled={isOpen} size={40} toggle={setOpen} label="menu" hideOutline={true} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={click ? handleClick : null}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/resume"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar4;
