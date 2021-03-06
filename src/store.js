import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { beerListReducer, beerDetailsReducer } from './reducers/beerReducers';

const reducer = combineReducers({
  beerList: beerListReducer,
  beerDetails: beerDetailsReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
