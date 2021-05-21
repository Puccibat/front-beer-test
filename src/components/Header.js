import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <div className=' bg-yellow-500 mx-auto px-4 py-2'>
        <div>
          <Link to='/'>
            <h1 className='text-white text-xl text-center font-semibold md:text-4xl py-5'>
              Welcome to BeerPedia
            </h1>
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
