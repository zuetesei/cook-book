import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LogInForm() {
    return (
        <div class="logform">
            <h2> Log In to See What's Cookin 🍳 </h2>
            <Form>
                <Form.Group className='mb-3' controlId='formGroupEmail'>
                    <Form.Label> Email Address: </Form.Label>
                    <Form.Control type='email' placeholder='Your Email' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label> Password: </Form.Label>
                    <Form.Control type='password' placeholder='Your Password' />
                </Form.Group>
                <Button type='submit'> Log In </Button>
            </Form>
        </div>
    );
}

export default LogInForm;