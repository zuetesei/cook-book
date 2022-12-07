import React from "react";

import "../styles/Dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserRecipes from "../components/UserRecipes";
import AllRecipes from "../components/AllRecipes";
// import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Container className="dashboard">
        <Row className="row">
          <Col className="userFeed">
            <AllRecipes />
          </Col>
          <Col className="userInfo">
            <UserRecipes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
