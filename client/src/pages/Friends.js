import React from "react";
import FriendList from "../components/FriendList";
import AddForm from "../components/AddForm";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Friends.css";

function Friends() {
  return (
    <div>
      {" "}
      test
      <FriendList />
      <AddForm />
    </div>
  );
}

export default Friends;
