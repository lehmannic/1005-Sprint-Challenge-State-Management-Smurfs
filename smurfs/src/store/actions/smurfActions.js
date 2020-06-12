import axios from 'axios';
import * as fetchActions from '../actions/actionTypes';

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: fetchActions.FETCH_SMURF_START });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then((res) =>
        // console.log(res.data)
        dispatch({
          type: fetchActions.FETCH_SMURF_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const addSmurf = () => {
  return (dispatch) => {
    dispatch({ type: fetchActions.ADD_SMURF_START });
    axios
      .post(`http://localhost:3333/smurfs`)
      .then((res) =>
        console.log(res)
        // dispatch({
        //   type: fetchActions.ADD_SMURF_SUCCESS,
        //   payload: res.data,
        // })
      )
      .catch((err) => console.log(err));
  };
};
