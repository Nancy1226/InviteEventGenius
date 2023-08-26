import {createStore, combineReducers} from 'redux';
import eventReducer from '../reducers/EventReducer';

const Store = createStore(
    combineReducers({
        user: eventReducer,
    })
)

export default Store;