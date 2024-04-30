import { TOGGLE_TAB } from '../actions/types';

const initialState = {
  openTabs: [],
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      const { payload } = action;

      return {
        ...state,
        openTabs: state.openTabs.includes(payload)
          ? state.openTabs.filter(tab => tab !== payload)
          : [...state.openTabs, payload],
      };
    default:
      return state;
  }
};

export default tabsReducer;
