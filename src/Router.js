import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import KasaLogo from "./components/svg/KasaLogo/KasaLogo";
import Home from "./pages/Home/Home";
import Lodging from "./pages/Lodging/Lodging";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Header Logo={KasaLogo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer Logo={KasaLogo} />
    </BrowserRouter>
  );
};

export default Router;



