import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='py-2 bg-yellow-300 text-white shadow-sm font-semibold'
      role='navigation'
    >
      <Link to='/' className='pl-5'>
        <i className='fa fa-home fa-2x hover:text-yellow-500'></i>
      </Link>
      <Link to='/cart' className='pl-5'>
        <i className='fas fa-shopping-cart fa-2x hover:text-yellow-500'></i>
      </Link>
    </nav>
  );
};

export default Navbar;
