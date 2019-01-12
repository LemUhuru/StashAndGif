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
    const { favoriteGifs } = state;
    const { type, payload } = action;

   switch(type) {
       case ADD_FAVORITE_GIF:
            return {
                ...state,
                favoriteGifs: { ...favoriteGifs, [payload.id]: payload }
            };

        case UPDATE_FAVORITE_GIF:
            return {
                ...state,
                favoriteGifs: { ...favoriteGifs, [payload.id]: payload.gif }
            }

        case REMOVE_FAVORITE_GIF:
           return {
                ...state,
                favoriteGifs: _.omit(favoriteGifs, payload)
            };
            
        default:
            return state;
    }
};
