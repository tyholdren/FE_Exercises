import { TOGGLE_CREATED, TOGGLE_TAB } from './types';

export const toggleTab = label => ({
  type: TOGGLE_TAB,
  payload: label,
});

export const toggleCreated = label => ({
  type: TOGGLE_CREATED,
  payload: label,
});
