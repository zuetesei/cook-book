import React, { useState } from "react"
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/Mutations';
import Auth from '../utils/auth';
import Login from '../pages/Login';

function SignUpForm() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    // submit form 
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // use try/catch instead of promises to handle errors
        try {
            // execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };



    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={<Login />}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="input"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
            {error && <div>Sign up failed</div>}
        </div>
    )
}

export default SignUpForm;