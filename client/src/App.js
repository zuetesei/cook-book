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
// import FriendsList from "./utils/Friends";
// import UserList from "./utils/UserList";
// import axios from "axios";
import Recipes from "./pages/Recipes";
import MyRecipes from "./pages/UserRecipes";
import Friends from "./pages/Friends";
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

// import LoggedInNavbar from "./components/LoggedInNav";

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
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/myrecipes" element={<MyRecipes />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider >
  )
};


export default App;


/*
          <Route
            path="/"
            exact
            render={() => (
              <UserList list={this.state.list} addFavorite={this.addFavorite} />
            )}
          />
          <Route
            path="/favorites"
            render={() => <FavoriteList favorites={this.state.favorites} />}
          />
*/
