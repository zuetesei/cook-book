import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import MyRecipes from "./pages/MyRecipes";
import "./styles/Auth.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";
// import LoggedInNavbar from "./components/LoggedInNav";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="auth" element={<Auth />} />
          <Route path="about" element={<About />} />
          <Route path="recipes" element={<Recipes />} />
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
