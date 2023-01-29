import axios from 'axios';
import {
  SET_DATA,
} from '../types';

export const setData = (payload) => ({ type: SET_DATA, payload });

export const sendData = (e, inputs) => (dispatch) => {
  e.preventDefault();
  console.log(inputs);
  axios.post('/api/pressure', inputs)
    .then((res) => {
      dispatch(setData(res.data));
    })
    .catch(console.log);
};
