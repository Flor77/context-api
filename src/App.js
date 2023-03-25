import "./App.css";
import Header from "./container/Header";
import Home from "./container/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./container/About";
import Support from "./container/Support";
import Platforms from "./container/Platforms";
import Pricing from "./container/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
