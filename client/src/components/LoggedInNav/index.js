import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import Auth from '../../utils/auth';

function LoggedInNavbar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavBar(false)
    }, ([location]));

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
                <button onClick={Auth.logout}> Logout </button>
            </div>
        </div>
    );
}

export default LoggedInNavbar;