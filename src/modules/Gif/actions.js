import axios from 'axios';
import {
    FETCH_GIFS_FAILURE,
    FETCH_GIFS_SUCCESS,
    FETCH_GIFS_PENDING,
} from './types';

const BASE_URL = 'http://api.giphy.com/v1/gifs/';
const { REACT_APP_GIF_API_KEY } = process.env;


const fetchGifs = query => {
    return dispatch => {
        dispatch(fetchGifsPending());

        try {
            console.log(process.env, 'proccess')
            const path = `${BASE_URL}search?q=${query}&api_key=${REACT_APP_GIF_API_KEY}`;
            axios.get(path)
            .then(response => {
                const { data } = response;


                dispatch(fetchGifsSuccess(data));
            })
            .catch(error =>{
                dispatch(fetchGifsFailure(error));
            });
        }

        catch(error) {
            dispatch(fetchGifsFailure(error));
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


export {
    fetchGifs,
    fetchGifsFailure,
    fetchGifsPending,
    fetchGifsSuccess,
};
