import { createStore, applyMiddleware } from 'redux';
import {foodReducer } from './redux/reducer.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
    foodReducer, 
    applyMiddleware(
        thunkMiddleware, 
        createLogger()
    )
)

export default store