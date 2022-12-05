import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function SubscribersList(props) {

    return (
        <div className='subscribers'>
            <h1> Following You </h1>
            <ListGroup>
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked}>
                    This one is a button
                </ListGroup.Item>
            </ListGroup>
            {/* <span> {props.username} </span> */}
        </div>
    )
}

export default SubscribersList;