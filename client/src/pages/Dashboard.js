import React from 'react';
import { useState } from 'react';
import '../styles/Navbar.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Auth from '../utils/auth'
// import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Dashboard() {

    if(!Auth.loggedIn()){
        return <div>not login</div>
    }

    return (
        <div className='dashboard'>
            <Container>
                <Row>
                    <Col className='userFeed'>
                        <h2> Hot Recipes </h2>
                    </Col>
                    <Col className='userInfo'>
                        <h2> @LOVE.ZUE </h2>
                        {/* <button> <NoteAddIcon /> </button> */}
                        <h3> My Recipes </h3>
                        <ul>
                            <li> Recipe 1 </li>
                            <li> Recipe 2 </li>
                            <li> Recipe 3 </li>
                            <li> Recipe 4 </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;