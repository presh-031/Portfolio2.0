import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";

import "./App.css";
// import Navbar2 from "./components/Navbar2/Navbar2";
// import Navbar3 from "./components/Navbar3/Navbar3";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
// import FooterLinks from "./components/FooterLinks/FooterLinks";
// import NavBar4 from "./components/Navbar4/Navbar4";
import Projects2 from "./components/Projects2/Projects2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar4 /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/projects" element={<Projects />}></Route> */}
          <Route path="/projects" element={<Projects2 />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <FooterLinks /> */}
    </div>
  );
}

export default App;
