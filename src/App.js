import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import BeerList from './pages/BeersList';
import BeerDetails from './pages/BeerDetails';
import BeerCart from './pages/BeerCart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/beer/:id' component={BeerDetails} />
        <Route path='/cart' component={BeerCart} exact />
        <Route path='/:pageNumber' component={BeerList} exact />
        <Route path='/' component={BeerList} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
