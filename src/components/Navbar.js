import React from 'react';
import { useState } from 'react';
// import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context/contextNavbar';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  //Logout
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function handleLogout() {
    localStorage.clear();
    // window.location.reload();
    window.location.href = window.location.href
    window.history.pushState(null, null, '/')
  }

  if (localStorage.getItem('role') === 'fermier') {
    return (
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            {/* <img src={logo} className='nav-logo' alt='' /> */}
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <Link className='link-btn' to='/'>
                home
              </Link>
            </li>
            <li>
              <Link className='link-btn' to='/about'>
                about us
              </Link>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                menu
              </button>
            </li>
            {/* <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                collaboration
              </button>
            </li> */}
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                documentation
              </button>
            </li>
            <li>
              <Link className='link-btn' to="/farmPage">
                farm page
              </Link>
            </li>
          </ul>
          <div>
            {/* <Link className='btn signin-btn' to="/membre/login">Sign in</Link> */}
            <LogoutButton onClick={handleLogout} />
            {/* <Link className='btn signin-btn' to="/">Logout</Link> */}

          </div>


        </div>
      </nav>
    );
  }
  else if (localStorage.getItem('role') === 'veterinaire') {
    return (
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            {/* <img src={logo} className='nav-logo' alt='' /> */}
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <Link className='link-btn' to='/'>
                home
              </Link>
            </li>
            <li>
              <Link className='link-btn' to='/about'>
                about us
              </Link>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                menu
              </button>
            </li>
            {/* <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                collaboration
              </button>
            </li> */}
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                documentation
              </button>
            </li>
            <li>
              <Link className='link-btn' to="/SensorsData">
                Données capteur
              </Link>
            </li>
          </ul>
          <div>
            {/* <Link className='btn signin-btn' to="/membre/login">Sign in</Link> */}
            <LogoutButton onClick={handleLogout} />

          </div>

        </div>
      </nav>
    );
  }
  else if (localStorage.getItem('role') === 'employe') {
    return (
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            {/* <img src={logo} className='nav-logo' alt='' /> */}
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <Link className='link-btn' to='/'>
                home
              </Link>
            </li>
            <li>
              <Link className='link-btn' to='/about'>
                about us
              </Link>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                menu
              </button>
            </li>
            {/* <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                collaboration
              </button>
            </li> */}
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                documentation
              </button>
            </li>
            <li>
              <Link className='link-btn' to="/ListAnimals">
                Animaux
              </Link>
            </li>
          </ul>
          <div>
            {/* <Link className='btn signin-btn' to="/membre/login">Sign in</Link> */}
            <LogoutButton onClick={handleLogout} />

          </div>

        </div>
      </nav>
    );
  }
  else
    return (
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            {/* <img src={logo} className='nav-logo' alt='' /> */}
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <Link className='link-btn' to='/'>
                home
              </Link>
            </li>
            <li>
              <Link className='link-btn' to='/about'>
                about us
              </Link>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                menu
              </button>
            </li>
            {/* <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              collaboration
            </button>
          </li> */}
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                documentation
              </button>
            </li>
          </ul>
          <div>
            <Link className='btn signin-btn' to="/membre/login">Sign in</Link>
            {/* <FaGlobe className="globe" /> */}
          </div>

        </div>
      </nav>
    );
};

export default Navbar;
