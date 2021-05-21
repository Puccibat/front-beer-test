import React from 'react';
import { Link } from 'react-router-dom';

const Paginate = () => {
  const pages = 13;

  return (
    <>
      <h1 className=' text-center text-yellow-800 font-semibold'>Pages:</h1>
      <div className='flex justify-center'>
        {[...Array(pages).keys()].map((x, key) => (
          <h2
            className='text-yellow-700 text-2xl mr-2 hover:bg-yellow-500'
            key={key}
          >
            <Link to={`/${x + 1}`} key={key}>
              {x + 1}
            </Link>
          </h2>
        ))}
      </div>
    </>
  );
};

export default Paginate;
