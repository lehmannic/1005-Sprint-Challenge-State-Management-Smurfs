import React from 'react';

import Smurf from './Smurf';

const SmurfsList = ({ village }) => {
  return (
    <>
      {village.map((smurf) => (
        <Smurf smurf={smurf} />
      ))}
    </>
  );
};
export default SmurfsList;
