import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBeerDetails } from '../actions/beerActions';

const BeerDetails = ({ match }) => {
  const dispatch = useDispatch();

  const beerDetails = useSelector((state) => state.beerDetails);
  const { beer } = beerDetails;
  const currentBeer = beer[0];

  useEffect(() => {
    dispatch(listBeerDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      {!currentBeer ? (
        <h1>Loading...</h1>
      ) : (
        <div className='container my-5 mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className=' text-yellow-500 font-semibold mb-4 '>
              <h1 className='text-5xl'>{currentBeer.name}</h1>
              <h2 className='mt-4 text-3xl'>Description:</h2>
              <p>{currentBeer.description}</p>
              <h2 className='mt-4 text-3xl'>Ingredients:</h2>
              <br />
              <ul>
                Malt:{' '}
                {currentBeer.ingredients.malt.map((malt, key) => (
                  <li key={key}>
                    {malt.name +
                      ' ' +
                      malt.amount.value +
                      ' ' +
                      malt.amount.unit}
                  </li>
                ))}{' '}
              </ul>
              <br />
              <ul>
                Hops:{' '}
                {currentBeer.ingredients.hops.map((hop, key) => (
                  <li key={key}>
                    {hop.name + ' ' + hop.amount.value + ' ' + hop.amount.unit}
                  </li>
                ))}{' '}
              </ul>
              <br />
              <p>Yeast: {currentBeer.ingredients.yeast}</p>
              <h2 className='mt-4 text-3xl'>Volume:</h2>
              <p>{currentBeer.volume.value + ' ' + currentBeer.volume.unit}</p>
              <h2 className='mt-4 text-3xl'>Brewer tips:</h2>
              <p>{currentBeer.brewers_tips}</p>
            </div>
            <div>
              <div className='overflow-hidden rounded-lg w-72 m-auto'>
                <img
                  alt='Beer'
                  className='block h-auto w-full'
                  src={currentBeer.image_url}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeerDetails;
