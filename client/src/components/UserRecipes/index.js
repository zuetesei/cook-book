import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useQuery} from '@apollo/client'
import {QUERY_ME} from '../../utils/Queries'


function UserRecipes() {
    const { data } = useQuery(QUERY_ME)
    let listItems ='dog'
    if(data){
        console.log(data)
        listItems = data.me.recipes.map(rec=>{
            console.log(rec.recipeText)
        })
        console.log(listItems)
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header> My Recipes </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> {listItems[0]} 1 </ListGroup.Item>
                <ListGroup.Item> {listItems[1]} 2 </ListGroup.Item>
                <ListGroup.Item> {listItems[3]} 3 </ListGroup.Item>
                
            </ListGroup>
        </Card>
           
    )
}

export default UserRecipes;