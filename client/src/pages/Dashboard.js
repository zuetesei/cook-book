import React from 'react';
import UserCard from '../components/UserCard';
import '../styles/Navbar.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserRecipes from '../components/UserRecipes';
import AddForm from '../components/AddForm';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Dashboard() {
    return (
        <div className='dashboard'>
            <Container>
                <Row>
                    <Col sm={8} className='userFeed'>
                        <h2> Hot Recipes </h2>
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