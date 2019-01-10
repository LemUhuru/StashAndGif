import _ from 'lodash';
import favoriteGifs from '../../seed/favoriteGifs';

import {
    ADD_FAVORITE_GIF,
    UPDATE_FAVORITE_GIF,
    REMOVE_FAVORITE_GIF,
} from './types';

const INITIAL_STATE = {
    favoriteGifs,
};

export default function reducer(state = INITIAL_STATE, action = {}) {
   switch(action.type) {
       case ADD_FAVORITE_GIF:
            return {
                ...state,
                favoriteGifs: { ...state.favoriteGifs, [action.payload.id]: action.payload }
            };

        case UPDATE_FAVORITE_GIF:
            return {
                ...state,
                favoriteGifs: { ...state.favoriteGifs, [action.payload.id]: action.payload.gif }
            }

        case REMOVE_FAVORITE_GIF:
           return {
                ...state,
                favoriteGifs: _.omit(state.favoriteGifs, action.payload)
            };
            
        default:
            return state;
    }
};
