import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Navbar2 from "./components/Navbar2/Navbar2";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Home />}></Route>
          <Route path="/projects" element={<Home />}></Route>
          <Route path="/resume" element={<Home />}></Route>
          <Route path="/contact" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
