import gifReducer from './modules/Gif/reducer';
import favoriteGifReducer from './modules/FavoriteGif/reducer';


import { combineReducers } from 'redux';

export default combineReducers({
    gif: gifReducer,
    faveGif: favoriteGifReducer,
});