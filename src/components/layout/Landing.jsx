import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">ParkingAds</h1>
              <p className="lead">Find the nearest available parking lot and explore the area!</p>
              <hr />
              <Link to="/parking-lots" className="btn btn-lg btn-info mr-2">
                Search parking lot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
