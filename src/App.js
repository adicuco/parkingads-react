import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import ParkingLots from './components/parking-lots/ParkingLots';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/parking-lots" component={ParkingLots} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
