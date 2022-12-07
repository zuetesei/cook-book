import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function UserRecipes() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header> My Recipes </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Recipe 1 </ListGroup.Item>
                <ListGroup.Item> Recipe 2 </ListGroup.Item>
                <ListGroup.Item> Recipe 3 </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default UserRecipes;