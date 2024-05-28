import { TOGGLE_CREATED } from '../actions/types';

const initialSate = {
  displayCreated: [],
};

const createdReducer = (state = initialSate, action) => {
  switch (action.type) {
    case TOGGLE_CREATED:
      const { payload } = action;

      return {
        ...state,
        displayCreated: state.displayCreated.includes(payload)
          ? state.displayCreated.filter(curDate => curDate !== payload)
          : [...state.displayCreated, payload],
      };
    default:
      return state;
  }
};
export default createdReducer;
