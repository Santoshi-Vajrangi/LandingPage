 import React from "react";
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HorizontalCards from "./components/HorizontalCards";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Conclusion from './components/Conclusion';

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
              <Hero />
              <Features />
              <HorizontalCards />
              <FAQ />
              <Conclusion />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Future routes
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/balances" element={<Balances />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/settings" element={<Settings />} />
        */}
      </Routes>
        
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;