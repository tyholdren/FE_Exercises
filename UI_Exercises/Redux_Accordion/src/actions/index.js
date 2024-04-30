import { TOGGLE_TAB } from './types';

export const toggleTab = label => ({
  type: TOGGLE_TAB,
  payload: label,
});
