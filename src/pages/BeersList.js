import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBeers } from '../actions/beerActions';
import BeerCard from '../components/BeerCard';
import Paginate from '../components/Paginate';

const BeersList = ({ match, history }) => {
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const beerList = useSelector((state) => state.beerList);
  const { beers } = beerList;

  useEffect(() => {
    dispatch(listBeers(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      {!beers ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className='grid lg:grid-cols-4 sm:grid-cols-1'>
            {beers.map((beer) => (
              <BeerCard beer={beer} key={beer.id} history={history} />
            ))}
          </div>
          <Paginate />
        </>
      )}
    </>
  );
};

export default BeersList;
