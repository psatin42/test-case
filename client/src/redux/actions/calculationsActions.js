import axios from 'axios';
import {
  SET_DATA,
} from '../types';

export const setData = (payload) => ({ type: SET_DATA, payload });

// авторизация
export const sendData = (e, inputs) => (dispatch) => {
  e.preventDefault();
  console.log(inputs);
  axios.post('/api/calculations', inputs)
    .then((res) => {
      dispatch(setData(res.data));
    })
    .catch(console.log);
};
