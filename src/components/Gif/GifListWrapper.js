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
        const { addFavoriteGif, removeFavoriteGif, gif, faveGif } = this.props;
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