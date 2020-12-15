import { createStore, combineReducers } from 'redux';
import validateReducer from './reducers/validateReducer';

const rootReducer = combineReducers({validateReducer});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
