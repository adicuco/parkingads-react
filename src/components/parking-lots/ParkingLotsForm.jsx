import React from 'react';

import TextFieldGroup from '../common/TextFieldGroup';

const ParkingLotsForm = props => {
  return (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">
          Type your location to find the nearest parking lots
        </div>
        <div className="card-body">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <TextFieldGroup
                placeholder="Latitude"
                name="latitude"
                value={props.location.latitude}
                onChange={props.handleChange}
              />
              <TextFieldGroup
                placeholder="Longitude"
                name="longitude"
                value={props.location.longitude}
                onChange={props.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Search
            </button>
            <button onClick={props.handleClear} className="btn btn-dark" style={{ marginLeft: 10 }}>
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParkingLotsForm;
