import { LOGOUT, SET_AUTH } from '../types';

// в этом файле логика взаимодействия со state
export default function userReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      return payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
