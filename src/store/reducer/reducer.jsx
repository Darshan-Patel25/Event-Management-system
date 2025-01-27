// src/store/reducer/reducer.js
import { combineReducers } from 'redux';

// Example reducer
const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// Combine your reducers
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
