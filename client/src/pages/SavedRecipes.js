import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import AddForm from "../components/AddForm";
import FavoriteRecipes from "../components/FavoriteRecipes";
import UserRecipes from "../components/UserRecipes";
import UserCard from "../components/UserCard";

function Recipes() {
  return (
    <div className="saved-recipe">
      <Container>
        <Row>
          <Col sm={4} className="user-section">
            <UserCard />
            <AddForm />
          </Col>
          <Col sm={4} className="fav-section"> <FavoriteRecipes /> </Col>
          <Col sm={4} className='user-recipes'> <UserRecipes /> </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Recipes;
