import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> ProfileCreator
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/profile/me'>View Profile</Link>
        </li>
        <li>
          <Link to='/profile'>Create Profile</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
