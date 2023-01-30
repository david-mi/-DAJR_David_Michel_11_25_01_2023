import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import Home from "./components/Home/Home";
import Lodging from "./components/Lodging/Lodging";
import Header from "./pages/Header/Header";
import NotFound from "./pages/NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Lodging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;



