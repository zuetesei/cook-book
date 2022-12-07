import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';


function UserCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title> Username </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Sacramento, CA </Card.Subtitle>
                <Card.Text>
                    I love to cook. This is my bio.
                </Card.Text>
                <Card.Link href="/savedrecipes"> My Recipes </Card.Link>
                <Card.Link href="/profile"> Profile </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default UserCard;