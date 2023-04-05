import "./App.css";
import { useState } from "react";
import Header from "./container/Header";
import Home from "./container/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseEffectHook from "./container/UseEffectHook";
import CustomHook from "./container/CustomHook";
import Props from "./container/Props";
import CreateContext from "./container/CreateContext";
import UseRefHook from "./container/UseRefHook";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-ref" element={<UseRefHook />} />
        <Route path="/use-effect" element={<UseEffectHook />} />
        <Route path="/custom-hook" element={<CustomHook />} />
        <Route path="/props" element={<Props />} />
        <Route path="/create-context" element={<CreateContext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
