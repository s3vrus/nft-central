import React from 'react';
import {GiSpy} from 'react-icons/gi'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
            <GiSpy className='icon' />
            <h1>Privacy Coins</h1>
        </div>
    </Link>
  )
};

export default Navbar;
