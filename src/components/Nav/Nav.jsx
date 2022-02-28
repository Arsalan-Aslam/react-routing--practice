import React from 'react';
import "../Nav/Nav.css"
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <NavLink
              className={({isActive}) => isActive ? "active-link" : undefined}
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active-link" : undefined} to='/About'>About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active-link" : undefined} to='/Contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;