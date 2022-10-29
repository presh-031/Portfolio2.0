import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Navbar2 from "./components/Navbar2/Navbar2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar2 />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
