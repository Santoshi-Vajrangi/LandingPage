 import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HorizontalCards from "./components/HorizontalCards";
import Footer from "./components/Footer";
import Login from "./components/Login";

const MainContent = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!isLoginPage && <Hero />}
              {!isLoginPage && <Features />}
              {!isLoginPage && <HorizontalCards />}
              {!isLoginPage && <Footer />}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;