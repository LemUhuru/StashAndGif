import React, { Component } from 'react';
import GifList from './GifList';
import FavoriteGifList from '../Favorite/FavoriteGifList';
import { isFavorited, getGifsAsArray } from '../../helpers/gifs';

class GifListWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifPlaceholders: 5,
        };
    };




    handleGifClick = event => {
        const { addFavoriteGif, removeFavoriteGif, updateFavoriteGif, gif, faveGif } = this.props;
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
        //   const faveGifs = getGifsAsArray(favoriteGifs);
        //   console.log(faveGifs.length, 'length')
        //   if (faveGifs.length < 6) {
        //     for (let i = 0; i < faveGifs.length < 10; i++) {
        //         const placeholderId = faveGifs[i];
        //         console.log(placeholderId)

        //         if (i === parseInt(placeholderId)) {
        //             updateFavoriteGif(`placeholder-${placeholderId}`, favoriteGif);
        //             break;
        //         };
        //     }
        //     //  const placeholderIds = Object.keys(favoriteGifs);
        //     //  const placeholderId = `placeholder-${Math.min(placeholderIds)}`;

        //   }

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
        const { gifPlaceholders } = this.state;

        return (
            <div>
                {isFaveList ? 
                <FavoriteGifList faveGif={faveGif} handleGifClick={this.handleGifClick} gifLimit={gifLimit} gifPlaceholders={gifPlaceholders} /> 
                : 
                <GifList gif={gif} handleGifClick={this.handleGifClick} gifLimit={gifLimit}  />}
            </div>
            )
    };
};


export default GifListWrapper;