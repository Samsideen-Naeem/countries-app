import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
    <h1>LOGO</h1>
    <ul>
    
    
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/contact"}>Contact</Link></li>
    <li><Link to={"/about"}>AboutScreen</Link></li>
    <li><Link to={"/product"}>products</Link></li>

    </ul>
    </nav>
  )
}

export default Header