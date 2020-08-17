import * as actions from '../actions/actionTypes';

export const initialState = [
  {
    name: '',
    age: '',
    height: '',
  },
];

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_SMURF:
      return [
        ...state,
        {
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height,
        },
      ];
    default:
      return state;
  }
};
