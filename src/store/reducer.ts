import { combineReducers } from 'redux';
import User from './user/reducer';
import Layout from './layout/reducer'
export const createRootReducer=()=>
    combineReducers({
        User,
        Layout,
    });