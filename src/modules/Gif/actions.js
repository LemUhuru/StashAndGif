import axios from 'axios';
import {
    FETCH_GIFS_FAILURE,
    FETCH_GIFS_SUCCESS,
    FETCH_GIFS_PENDING,
    FETCH_NEXT_PAGE_PENDING,
    FETCH_NEXT_PAGE_SUCCESS,
    FETCH_NEXT_PAGE_FAILURE,
} from './types';

const BASE_URL = 'https://api.giphy.com/v1/gifs/';
const { REACT_APP_GIF_API_KEY } = process.env;


const fetchGifs = (query, pagination = {}, callback = null)=> {
    return dispatch => {
        dispatch(fetchGifsPending())

        try {
            const path = `${BASE_URL}search?q=${query}&api_key=${REACT_APP_GIF_API_KEY}&limit=15`;

            axios.get(path)
            .then(({ data }) => {
                dispatch(fetchGifsSuccess(query, data));
                callback && callback();
            })
            .catch(({ message }) => {
                dispatch(fetchGifsFailure(message));
            });
        }
        
        catch(error) {
            dispatch(fetchGifsFailure(error.message));
        };
    };
};

// NTS: Move into paginate reducer
const fetchNextPage = (query, limit, offset) => {
    return dispatch => {
        dispatch(fetchNextPagePending());

        try {
            const path = `${BASE_URL}search?q=${query}&api_key=${REACT_APP_GIF_API_KEY}&limit=${limit}&offset=${offset}`;
            axios.get(path)
            .then(({ data }) => {
                dispatch(fetchNextPageSuccess(data))
            })
            .catch(({ message }) => {
                dispatch(fetchNextPageFailure(message))
            })
        }
        catch(error) {
            dispatch(fetchNextPageFailure(error.message))
        }
    }
}

const fetchGifsPending = () => {
    return {
        type: FETCH_GIFS_PENDING,
    };
};


const fetchGifsSuccess = (searchQuery, gifs) => {
    return {
        type: FETCH_GIFS_SUCCESS,
        payload: { searchQuery, gifs },
    
    };
};

const fetchGifsFailure = error => {
    return {
        type: FETCH_GIFS_FAILURE,
        payload: error,
    };
};

const fetchNextPagePending = () => {
    return {
        type: FETCH_NEXT_PAGE_PENDING,
    };
};


const fetchNextPageSuccess = gifs => {
    return {
        type: FETCH_NEXT_PAGE_SUCCESS,
        payload: gifs,
    };
};

const fetchNextPageFailure = error => {
    return {
        type: FETCH_NEXT_PAGE_FAILURE,
        payload: error,
    };
};


export {
    fetchGifs,
    fetchGifsFailure,
    fetchGifsPending,
    fetchGifsSuccess,
    fetchNextPage,
    fetchNextPageFailure,
    fetchNextPageSuccess,
    fetchNextPagePending,
};
