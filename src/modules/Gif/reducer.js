import {
    FETCH_GIFS_SUCCESS,
    FETCH_GIFS_FAILURE,
    FETCH_GIFS_PENDING,
} from './types';

const INITIAL_STATE = {
    isPending : false,
    isError : false,
    errorMsg: '',
    isSuccess: false,
    gifs: {},
    favoriteGifs: {},
};

export default function reducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case FETCH_GIFS_PENDING:
            return {
                isPending: true,
            };
        
        case FETCH_GIFS_SUCCESS:
            return {
                isSuccess: true,
                isPending: false,
                isError: false,
                gifs: action.payload,
            };

        case FETCH_GIFS_FAILURE:
            return {
                isError: true,
                isPending: false,
                isSuccess: false,
                errorMsg: action.payload,
            };

        default:
            return state;
    }
};
