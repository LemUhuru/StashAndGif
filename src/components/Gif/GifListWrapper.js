import React, { Component } from 'react';
import GifList from './GifList';
import FavoriteGifList from '../Favorite/FavoriteGifList';
import { isFavorited, getGifsAsArray } from '../../helpers/gifs';

class GifListWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    handleGifClick = event => {
        const { addFavoriteGif, removeFavoriteGif, gif, faveGif } = this.props;
        const { gifs } = gif;
        const { favoriteGifs } = faveGif;

        const { id, classList } = event.target;
        const favoriteGif = gifs[id];
        const isFaveButton = classList.contains('fave-btn');

        // Swap fav with placeholder
        // Check if favoriteGifs length is < 5 then updateFaveGifs else addFavoriteGifs
        //   iterate over favoriteGifsArr 
        //         if the index === the gifId it hasn't been swapped yet.
        // if it is then updateFavoriteGif(, faveGif)
        // Spark animation
          const gifsArr = getGifsAsArray(favoriteGifs);
          if (gifsArr.length < 5) {

          }
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

    render() {
        const { isFaveList = false, gif, faveGif, gifLimit } = this.props;

        return (
            <div>
                {isFaveList ? 
                <FavoriteGifList faveGif={faveGif} handleGifClick={this.handleGifClick} gifLimit={gifLimit} /> 
                : 
                <GifList gif={gif} handleGifClick={this.handleGifClick} gifLimit={gifLimit}  />}
            </div>
            )
    };
};


export default GifListWrapper;