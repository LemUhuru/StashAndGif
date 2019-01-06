import gifReducer from './modules/Gif/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    gif: gifReducer,
});