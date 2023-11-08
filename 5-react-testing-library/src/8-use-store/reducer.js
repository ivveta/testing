import { counterSlice } from './slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({ counter: counterSlice });
