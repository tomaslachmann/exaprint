import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
    <nav>
        <li>
            <Link to="/">
                <img 
                 src="assets/logo-01.png"
                 alt="logo Exa print"
                 width={160} />
            </Link>
        </li>
        <li>
            <Link to="/">O nás</Link>
        </li>
        <li>
            <Link to="/studio">Studio</Link>
        </li>
        <li>
            <Link to="/tisk">Tisk</Link>
        </li>
        <li>
            <Link to="/reference">Reference</Link>
        </li>
        <li>
            <Link to="/kontakt">Kontakt</Link>
        </li>
    </nav>
  );
}

export default Navbar;