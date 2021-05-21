import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = ({ beer, history }) => {
  const addToCartHandler = () => {
    history.push(`/cart/${beer.id}`);
  };

  return (
    <>
      <div className='grid grid-cols-1 p-3 bg-yellow-100 m-3 rounded shadow-xl text-yellow-400'>
        <Link to={`/beer/${beer.id}`}>
          <img className=' max-h-72 m-auto' src={beer.image_url} alt='Beer' />
        </Link>

        <Link to={`/beer/${beer.id}`}>
          <h1 className='text-2xl font-semibold mb-1 text-yellow-400'>
            {beer.name}
          </h1>
        </Link>

        <h1 className='text-xl font-semibold mb-1'>
          Volume: {beer.volume.value + ' ' + beer.volume.unit}
        </h1>
        <button
          className=' text-white justify-center rounded-md py-2 px-4 bg-yellow-500 focus:outline-none'
          onClick={addToCartHandler}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default BeerCard;
