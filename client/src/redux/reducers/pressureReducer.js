import { SET_DATA } from '../types';

export default function pressureReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_DATA:
      return payload;
    default:
      return state;
  }
}
