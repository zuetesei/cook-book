import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav";
import LoggedInNav from "./components/LoggedInNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Recipe from "./pages/SingleRecipe";
import SavedRecipes from "./pages/UserRecipes";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Signup.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";
// import Auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        {isLoggedIn ? <LoggedInNav /> : <Nav />}
        {/* <Nav /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
          <Route path="/profile" element={<Profile />} />
          <Button> Log Off </Button>

        </Routes>
        <Footer />
      </Router>
    </ApolloProvider >
  )
};


export default App;
