import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;