import React from 'react';

const Smurf = ({ smurf }) => {
  return (
    <div className='container'>
      <h5>{smurf.name}</h5>
      <p>age: {smurf.age}</p>
      <p>height: {smurf.height}</p>
    </div>
  );
};

export default Smurf;
