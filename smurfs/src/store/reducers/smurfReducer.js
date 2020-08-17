import * as fetchActions from '../actions/actionTypes';

const initialState = {
  village: [],
  isFetching: false,
  error: '',
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActions.FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
      };
    case fetchActions.FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        event: action.payload,
      };
    default:
      return state;
  }
};

