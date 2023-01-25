import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;



