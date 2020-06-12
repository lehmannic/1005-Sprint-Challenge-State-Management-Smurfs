import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../store/actions/smurfActions';

import SmurfsList from './SmurfsList';

const Village = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Village</h3>
      {props.village && <SmurfsList village={props.village}/>}
    </>
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
