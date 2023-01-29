import { configureStore } from '@reduxjs/toolkit';
import calculationReducer from './reducers/calculationReducer';
import pressureReducer from './reducers/pressureReducer';
import temperatureReducer from './reducers/temperatureReducer';

export default configureStore({
  reducer: {
    calculation: calculationReducer,
    pressure: pressureReducer,
    temperature: temperatureReducer,
  },
});
