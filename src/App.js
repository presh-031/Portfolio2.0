import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";

import "./App.css";
// import Navbar2 from "./components/Navbar2/Navbar2";
import Navbar3 from "./components/Navbar3/Navbar3";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import FooterLinks from "./components/FooterLinks/FooterLinks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <Navbar2 /> */}
        <Navbar3 />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <FooterLinks /> */}
    </div>
  );
}

export default App;
