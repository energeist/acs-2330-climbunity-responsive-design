import React from 'react';
import './Header.css';
import logo from './logo-no-background.png';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const handleClick = () => {
    navigate(-1);
  };
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <section className='Header' role="banner">
      <header>
        <img src={logo} alt="Climbunity Logo" />
        <h1 className='Header-Subtitle'>
          Climbing in the Red River Gorge
        </h1>
        <section className="Header-Buttons" role="navigation" aria-label="Main Navigation">
          <div className="PersistentNav">
            <NavLink 
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
              to="/"
              aria-current={location.pathname === '/' ? "page" : null}
              >
                Climbing Areas
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
              to="/about"
              aria-current={location.pathname === '/about' ? "page" : null}
              >
                About Climbunity
            </NavLink>
          </div>
          <div className="GoBack">
            { location.pathname === '/' ? '' :
              <NavLink 
                className="nav-link"
                onClick={handleClick}
                >
                  Go Back
              </NavLink>
            }
          </div>
        </section>
      </header>
    </section>
  )
}

export default Header;