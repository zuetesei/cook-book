import React from "react";
import "../styles/Myrecipes.css";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import AddForm from "../components/AddForm";
import FavoriteRecipes from "../components/FavoriteRecipes";
import UserRecipes from "../components/UserRecipes";

function Recipes() {
  return (
    <div className="recipe">
      <Container>
        <AddForm />
      </Container>
      <div className="flex-container">
        <div className="favsection" id="favsection">
          <FavoriteRecipes />
        </div>
        <div className="myrecipes" id="myrecipes">
          <UserRecipes />
        </div>
      </div>
    </div>
  );
}

export default Recipes;
