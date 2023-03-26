import "./App.css";
import Header from "./container/Header";
import Home from "./container/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./container/About";
import CustomHook from "./container/CustomHook";
import Props from "./container/Props";
import CreateContext from "./container/CreateContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/custom-hook" element={<CustomHook />} />
        <Route path="/props" element={<Props />} />
        <Route path="/create-context" element={<CreateContext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
