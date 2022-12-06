import React from "react";
import "../styles/Myrecipes.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Recipes() {
  return (
    <div className="recipe">
      <Container>
        <Link to="/recipes">
          <Button variant="primary" size="lg">
            Add a recipe!
          </Button>
        </Link>
      </Container>
      <div className="flex-container">
        <div className="favsection" id="favsection">
          My Favorites:
        </div>
        <div className="myrecipes" id="myrecipes">
          My Recipes:
        </div>
      </div>
    </div>
  );
}

export default Recipes;
