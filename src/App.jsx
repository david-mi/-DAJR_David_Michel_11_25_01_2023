import React from "react";
import "./types";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import KasaLogo from "./components/svg/KasaLogo/KasaLogo";

const App = () => {
  return (
    <BrowserRouter>
      <Header Logo={KasaLogo} />
      <Routes />
      <Footer Logo={KasaLogo} />
    </BrowserRouter>
  );
};

export default App;
