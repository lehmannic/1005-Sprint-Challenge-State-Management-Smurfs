import React, { useState } from 'react';
// import axios from 'axios';

// import { initialState, formReducer } from '../store/reducers/formReducer';
// import * as actions from '../store/actions/actionTypes';
import { addSmurf } from '../store/actions/smurfActions';
import { connect } from 'react-redux';

const SmurfForm = (props) => {
  const [newSmurfValues, setSmurfValues] = useState({
    newName: '',
    newAge: '',
    newHeight: '',
  });

  const handleChanges = (e) => {
    setSmurfValues({
      ...newSmurfValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <label>
        Name:
        <input
          type='text'
          name='newName'
          value={newSmurfValues.newName}
          onChange={handleChanges}
        />
      </label>
      <label>
        Age:
        <input
          type='text'
          name='newAge'
          value={newSmurfValues.newAge}
          onChange={handleChanges}
        />
      </label>
      <label>
        Height:
        <input
          type='text'
          name='newHeight'
          value={newSmurfValues.newHeight}
          onChange={handleChanges}
        />
      </label>
      <button onClick={props.addSmurf()}>+add</button>
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

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
