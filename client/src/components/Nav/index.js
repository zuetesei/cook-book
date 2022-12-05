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

  return (

    <div className='navbar' id={expandNavBar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button onClick={() => { setExpandNavBar((prev) => !prev); }}> < ReorderIcon /> </button>
      </div>

      <div className="links">
        <div className="logo">
          <img src={Logo} alt="company logo" />
        </div>
        <Link to="/"> Home </Link>
        <Link to="/signup"> Sign Up </Link>
        <Link to="/about"> About </Link>
        {/* <Link to="/recipes"> Add Recipe </Link>
        <Link to="/myrecipes"> My Recipes </Link> */}
      </div>
    </div>
  );
}

export default Nav;
