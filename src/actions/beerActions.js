import axios from 'axios';
import {
  BEER_LIST_REQUEST,
  BEER_LIST_SUCCESS,
  BEER_LIST_FAIL,
  BEER_DETAILS_REQUEST,
  BEER_DETAILS_SUCCESS,
  BEER_DETAILS_FAIL,
} from '../constants/beerConstants';

export const listBeers =
  (pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: BEER_LIST_REQUEST });

      const { data } = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=25`
      );

      dispatch({ type: BEER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BEER_LIST_FAIL,
        payload: error.message,
      });
    }
  };

export const listBeerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BEER_DETAILS_REQUEST });

    const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);

    dispatch({ type: BEER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BEER_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
