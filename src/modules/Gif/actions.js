import axios from 'axios';
import {
    FETCH_GIFS_FAILURE,
    FETCH_GIFS_SUCCESS,
    FETCH_GIFS_PENDING,
    ADD_FAVORITE_GIF,
    REMOVE_FAVORITE_GIF,
} from './types';

const BASE_URL = 'http://api.giphy.com/v1/gifs/';
const { REACT_APP_GIF_API_KEY } = process.env;


const fetchGifs = query => {
    return dispatch => {
        dispatch(fetchGifsPending());

        try {
            const path = `${BASE_URL}search?q=${query}&api_key=${REACT_APP_GIF_API_KEY}`;

            axios.get(path)
            .then(response => {
                const { data } = response;

                dispatch(fetchGifsSuccess(data));
            })
            .catch(error => {
                dispatch(fetchGifsFailure(error.message));
            });
        }
        
        catch(error) {
            dispatch(fetchGifsFailure(error.message));
        };
    };
};


const fetchGifsPending = () => {
    return {
        type: FETCH_GIFS_PENDING,
    };
};


const fetchGifsSuccess = gifs => {
    return {
        type: FETCH_GIFS_SUCCESS,
        payload: gifs,
    };
};

const fetchGifsFailure = error => {
    return {
        type: FETCH_GIFS_FAILURE,
        payload: error,
    };
};

const addFavoriteGif = gif => {
    return {
        type: ADD_FAVORITE_GIF,
        payload: gif,
    };
};

const removeFavoriteGif = id => {
    return {
        type: REMOVE_FAVORITE_GIF,
        payload: id,
    }
}


export {
    fetchGifs,
    fetchGifsFailure,
    fetchGifsPending,
    fetchGifsSuccess,
    addFavoriteGif,
    removeFavoriteGif,
};
