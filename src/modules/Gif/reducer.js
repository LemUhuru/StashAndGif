import _ from 'lodash';

import {
    FETCH_GIFS_SUCCESS,
    FETCH_GIFS_FAILURE,
    FETCH_GIFS_PENDING,
} from './types';

const INITIAL_STATE = {
    isPending : false,
    isError : false,
    errorMsg: '',
    pagination: null,
    meta: null,
    gifs: {},
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

        default:
            return state;
    }
};
