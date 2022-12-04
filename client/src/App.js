import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignUpForm from "./pages/Signup";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import MyRecipes from "./pages/MyRecipes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Auth.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// import LoggedInNavbar from "./components/LoggedInNav";


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/myrecipes" element={<MyRecipes />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider >
  );
}

export default App;
