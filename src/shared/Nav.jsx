import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import stillLogo from '../img/lmlogostill.png';
import gif from '../img/lmlogo.gif';

const Nav = () => {
  const [logo, setLogo] = useState(stillLogo);

  useEffect(()=> {
    setLogo(gif);
  }, []);

  return (
    <nav className="boxshadow d-flex flex-row justify-content-between py-4">
      <div className="align-items-center ">
        <NavLink id="home-logo" to='/LindsayMulhollen'>
          <img className="logo moblie-nav" src={logo} alt="logo" onMouseEnter={() => setLogo(gif)} onMouseLeave={() => setLogo(stillLogo)} />
        </NavLink>
      </div>
      <div className="lilNav">
      <NavLink className="nav-link mx-4" to='/Portfolio'>PORTFOLIO</NavLink>
      <NavLink className="nav-link mx-4" to='/About'>ABOUT</NavLink>
      <NavLink className="nav-link mx-4" to='/Resume'>RESUME</NavLink>
      </div>
    </nav>      
  );
}

export default Nav;


