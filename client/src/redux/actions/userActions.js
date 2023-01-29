// в этом файле взаимодействие фронта, который сделал запрос и мы высылаем этот action

import axios from 'axios';
import {
  SET_AUTH, LOGOUT,
} from '../types';

export const setAuthUser = (payload) => ({ type: SET_AUTH, payload });
export const logoutUser = () => ({ type: LOGOUT });

// проверка перезагрузки
// эта штука не может отдавать объект, а должна сделать ассинхронную операцию на бэк и это означает,
// что все что она возвращает это колбэк,  в который вложится диспатч
export const checkAuth = () => (dispatch) => {
  axios.post('/api/user/check')
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

// авторизация
export const loginUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/user/login', inputs)
    .then((res) => {
      dispatch(setAuthUser(res.data));
    })
    .catch(console.log);
};

// регистрация
export const signupUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/user/signup', inputs)
    .then((res) => {
      dispatch(setAuthUser(res.data));
    })
    .catch(console.log);
};

// выход
export const logoutUserAsync = () => (dispatch) => {
  axios('/api/user/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};
