import React from 'react';

const Ad = ({ ad }) => {
  return (
    <div className="card card-body mb-3">
      <img src={`data:image/jpeg;base64,${ad}`} alt="Default ad" />
    </div>
  );
};

export default Ad;
