import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import createdReducer from './createdReducer';

const rootReducer = combineReducers({
  tabs: tabsReducer,
  created: createdReducer,
});

export default rootReducer;
