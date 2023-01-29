import { configureStore } from '@reduxjs/toolkit';
import calculationReducer from './reducers/calculationReducer';

export default configureStore({
  reducer: {
    calculation: calculationReducer,
  },
});
