import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import FriendList from '../components/FriendList';
// import UserRecipes from '../components/UserRecipes';

function UserProfile() {

    return (
        <Container>
            <Row>
                <Col sm={8}> @username + user recipes component </Col>
                <Col sm={4}> Friends list </Col>
            </Row>
        </Container>
    )
}

export default UserProfile; 