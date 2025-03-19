import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Define your cartReducer
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development mode
});

export default store;
