import React, { useState } from 'react';

import defaultLots from '../../assets/defaultLots';
import defaultAd from '../../assets/defaultAd';

import ParkingLotsForm from './ParkingLotsForm';
import ParkingLotsItem from './ParkingLotsItem';
import Ad from '../common/Ad';

const ParkingLots = () => {
  const [ad, setAd] = useState(null);
  const [location, setLocation] = useState({
    latitude: '',
    longitude: ''
  });
  const [lots, setLots] = useState(null);

  const fetchAd = async () => {
    console.log(location.longitude, location.latitude);
    try {
      // const result = await axios.post(url, {
      //     Longitude : location.longitude,
      //     Latitude : location.latitude
      //     }
      // );
      setAd(defaultAd);
      setLots(defaultLots);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = e => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetchAd();
  };

  const handleClear = e => {
    e.preventDefault();
    setAd(null);
    setLots(null);
    setLocation({
      latitude: '',
      longitude: ''
    });
  };
  return (
    <div className="feed">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ParkingLotsForm
              location={location}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleClear={handleClear}
            />
            {ad ? <Ad ad={ad} /> : null}
            {lots ? lots.map(lot => <ParkingLotsItem key={lot.name} {...lot} />) : null}
            {ad ? <Ad ad={ad} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingLots;
