import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../store/actions/smurfActions';

const Village = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h3>Village</h3>
      {props.village.map((sibling) => (
        <div className='person' key={sibling.name}>
          <img width='150' src={sibling.img} alt={sibling.name} />
          <strong>{sibling.name}</strong>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    village: state.smurfReducer.event,
    isFetching: state.smurfReducer.isFetching,
    error: state.smurfReducer.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Village);
