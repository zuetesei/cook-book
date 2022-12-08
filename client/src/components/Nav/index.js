import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from "../../assets/logo.png";

function Nav() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

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

      <div className="links">
        <Link to="/"> <img className="logo" src={Logo} alt="company logo" /> </Link>
        <Link id="cubic" to="/"> <span title="Home"> Home </span> </Link>
        <Link id="cubic" to="/about"> <span title="About"> About </span> </Link>
        <Link id="cubic" to="#" onClick={logout}> Logout </Link>
        <Link id="cubic" to="/donate"> <span title="Donate"> Donate </span> </Link>
        {/* <Link to="/recipes"> Add Recipe </Link>
        <Link to="/myrecipes"> My Recipes </Link> */}
      </div>
    </div>
  );
}

export default Nav;
