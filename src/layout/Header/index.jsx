import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul className='menu'>
        <li>
        <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={'/about'}>About</Link>
        </li>
        <li>
        <Link to={"/sliders"}>Sliders</Link>
        </li>
        <li>
        <Link to={"/products"}> Products</Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Header
