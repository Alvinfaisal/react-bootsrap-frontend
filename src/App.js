import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/about" element={<AboutPage />} />
          <Route  path="/contact" element={<ContactPage />} />
          <Route  path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
