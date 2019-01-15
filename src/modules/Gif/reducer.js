import { mapKeys } from 'lodash';

import {
    FETCH_GIFS_SUCCESS,
    FETCH_GIFS_FAILURE,
    FETCH_GIFS_PENDING,
    FETCH_NEXT_PAGE_PENDING,
    FETCH_NEXT_PAGE_SUCCESS,
    FETCH_NEXT_PAGE_FAILURE,
} from './types';

const INITIAL_STATE = {
    searchQuery: '',
    isPending : false,
    isError : false,
    errorMsg: '',
    pagination: null,
    gifs: {},
    fetchingNextPagePending: false,
    fetchingNextPageError: false,
};

export default function reducer(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case FETCH_GIFS_PENDING:
            return {
                ...state,
                isPending: true,
            };
        
        case FETCH_GIFS_SUCCESS:
            const { searchQuery, gifs: { data, pagination } } = payload;
        
            return {
                ...state,
                isPending: false,
                isError: false,
                gifs: mapKeys(data, 'id'),
                pagination,
                searchQuery,
            };

        case FETCH_GIFS_FAILURE:
            return {
                ...state,
                isError: true,
                isPending: false,
                isSuccess: false,
                errorMsg: payload,
            };
        
        case FETCH_NEXT_PAGE_PENDING:
            return {
                ...state,
                fetchingNextPagePending: true,
            }

        case FETCH_NEXT_PAGE_SUCCESS:

            return {
                ...state,
                fetchingNextPageError: false,
                fetchingNextPagePending: false,
                gifs: { ...state.gifs, ...mapKeys(action.payload.data, 'id')},
                pagination: action.payload.pagination,
            }

        case FETCH_NEXT_PAGE_FAILURE:
            return {
                ...state,
                fetchingNextPagePending: false,
                fetchingNextPageError: true,
            }

        default:
            return state;
    }
};
