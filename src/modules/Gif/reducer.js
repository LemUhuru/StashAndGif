import _ from 'lodash';

import {
    FETCH_GIFS_SUCCESS,
    FETCH_GIFS_FAILURE,
    FETCH_GIFS_PENDING,
    ADD_FAVORITE_GIF,
    REMOVE_FAVORITE_GIF,
} from './types';

const INITIAL_STATE = {
    isPending : false,
    isError : false,
    errorMsg: '',
    isSuccess: false,
    pagination: null,
    meta: null,
    gifs: {},
    favoriteGifs: {},
};

export default function reducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case FETCH_GIFS_PENDING:
            return {
                ...state,
                isPending: true,
            };
        
        case FETCH_GIFS_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                isPending: false,
                isError: false,
                gifs: _.mapKeys(action.payload.data, 'id'),
                pagination: action.payload.pagination,
                meta: action.payload.meta,
            };

        case FETCH_GIFS_FAILURE:
            return {
                ...state,
                isError: true,
                isPending: false,
                isSuccess: false,
                errorMsg: action.payload,
            };
        
        case ADD_FAVORITE_GIF:
            return {
                ...state,
                favoriteGifs: { ...state.favoriteGifs, [action.payload.id]: action.payload }
            };
        
        case REMOVE_FAVORITE_GIF:
            return {
                ...state,
                favoriteGifs: _.omit(state.favoriteGifs, action.payload)
            };

        default:
            return state;
    }
};
