import React, { useState } from 'react';
// import '../styles/Navbar.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserCard from '../components/UserCard';
import UserRecipes from '../components/UserRecipes';
import AddForm from '../components/AddForm';
import AllRecipes from '../components/AllRecipes';
import Auth from '../utils/Auth';
import '../styles/Dashboard.css';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Dashboard() {
    if (!Auth.loggedIn()) {
        return <div>not login</div>
    }
    return (
        <div className='dashboard'>
            <Container>
                <Row>
                    <Col sm={8} className='userFeed'>
                        <AllRecipes />

                    </Col>
                    <Col sm={4} className='userInfo'>
                        <UserCard />
                        <AddForm />
                        <UserRecipes />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Dashboard;