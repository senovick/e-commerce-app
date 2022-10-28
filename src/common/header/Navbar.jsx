import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  // toggle menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
    <header className='header'>
      <div className="container d_flex">
        <div className="catagories d_flex">
          <span className="fa-solid fa-border-all"></span>
          <h4>
            Categories <i className="fa fa-chevron-down"></i>
          </h4>
        </div>

        <div className="navLink">
        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/pages'>Pages</Link>
          </li>
          <li>
            <Link to='/user'>Account</Link>
          </li>
          <li>
            <Link to='/vendor'>Vendor</Link>
          </li>
          <li>
            <Link to='/track'>My Order</Link>
          </li>
        </ul>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar