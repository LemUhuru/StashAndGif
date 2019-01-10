import React from 'react';
import GifList from './GifList';
import FavoriteGifList from '../Favorite/FavoriteGifList';
import { isFavorited } from '../../helpers/gifs';

const GifListWrapper = props => {

    const handleGifClick = event => {
        const { addFavoriteGif, removeFavoriteGif, gif, faveGif } = props;
        const { gifs } = gif;
        const { favoriteGifs } = faveGif;

        const { id, classList } = event.target;
        const favoriteGif = gifs[id];
        const isFaveButton = classList.contains('fave-btn');

        if (isFaveButton) { 
            if (isFavorited(id, favoriteGifs)) {
                classList.remove('trigger');
                removeFavoriteGif(id);
            } else {
                classList.add('trigger');
                addFavoriteGif(favoriteGif);
            };
        };
    };

    const { isFaveList = false, gif, faveGif, gifLimit } = props;

    return (
        <div>
            {isFaveList ? 
            <FavoriteGifList faveGif={faveGif} handleGifClick={handleGifClick} gifLimit={gifLimit} /> 
            : 
            <GifList gif={gif} handleGifClick={handleGifClick} gifLimit={gifLimit}  />}
        </div>
)}


export default GifListWrapper;