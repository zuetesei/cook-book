import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// import LoggedInNavbar from "./components/LoggedInNav";



function App() {
  return (
    <ApolloProvider client={client}>

    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="auth" element={<Auth />} />
          <Route path="about" element={<About />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="myrecipes" element={<MyRecipes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
