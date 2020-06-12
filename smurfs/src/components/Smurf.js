import React from 'react';

const Smurf = ({ smurf }) => {
  return (
    <>
      <h5>{smurf.name}</h5>
      <p>age: {smurf.age}</p>
      <p>height: {smurf.height}</p>
    </>
  );
};

export default Smurf;
