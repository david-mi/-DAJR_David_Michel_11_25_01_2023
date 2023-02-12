import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lodging from "./pages/Lodging/Lodging";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<Lodging />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);