import React from 'react';

function LogInForm() {
    return (
        <div class="logform">
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                    Email:
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter email address"
                ></input>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">
                    Password:
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter password"
                ></input>
            </div>
            <button type="button" class="btn btn-warning">
                Login
            </button>
            <button type="button" class="btn btn-warning">
                Sign up
            </button>
        </div>
    );
}

export default LogInForm;