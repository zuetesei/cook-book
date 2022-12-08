import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';

function LoggedInNavbar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavBar(false)
    }, ([location]));

    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');

        // CLEAR DATA FROM STORAGE
        localStorage.clear();
        sessionStorage.clear();

        window.location.assign("/");
    }

    return (
        <div className='navbar' id={expandNavBar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button onClick={() => { setExpandNavBar((prev) => !prev); }}> < ReorderIcon /> </button>
            </div>
            <div className='links'>
                <Link to='/'> Dahsboard </Link>
                <Link to='/myrecipes'> My Recipes </Link>
                {/* <Link to="/recipes"> Add Recipe </Link> */}
                <Link to='/profile'> Profile </Link>
                <button onClick={logout}> Logout </button>
            </div>
        </div>
    );
}

export default LoggedInNavbar;