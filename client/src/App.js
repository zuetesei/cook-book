import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Nav from "./components/Nav";
import LoggedInNav from "./components/LoggedInNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import About from "./pages/About";
import FriendsList from "./utils/Friends"
import UserList from "./utils/UserList"
import axios from "axios";
// import Recipes from "./pages/Recipes";
// import MyRecipes from "./pages/MyRecipes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Signup.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";
// import Auth from "./utils/auth";


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  addFavorite = favorite => {
    const { favorites } = this.state;

    if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
      this.setState({
        favorites: [...this.state.favorites, favorite]
      });
    }
  };

  getList = async () => {
    const api =
      "USERLIST_API_NECESSARY";

    await axios
      .get(api)
      .then(response => {
        this.setState({
          list: response.data.result
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // componentDidMount(); {
  //   this.getList();
  // }

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
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider >

  );
};

export default App;
