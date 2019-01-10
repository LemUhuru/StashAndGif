import React, { Component } from 'react';
import Gif from './Gif';
import { isFavorited, getGifsAsArray } from '../../helpers/gifs';

class GifList extends Component {
    // Convert to functional component.

    handleClick = event => {
        const { addFavoriteGif, removeFavoriteGif, gif, faveGif } = this.props;
        const { gifs } = gif;
        const { favoriteGifs } = faveGif;

        const { id, classList } = event.target;
        const favoriteGif = gifs[id];
        const isFaveButton = classList.contains('fave-btn');

        // Swap fav with placeholder
        // Check if favoriteGifs length is < 5 then updateFaveGifs else addFavoriteGifs
        //   iterate over favoriteGifsArr 
                // if the index === the gifId it hasn't been swapped yet.
        // if it is then updateFavoriteGif(, faveGif)
        // Spark animation
        //   const gifsArr = getGifsAsArray(favoriteGifs);
        //   if (gifsArr.length < 5) {

        //   }
        if (isFaveButton) {
            if (isFavorited(id, favoriteGifs)) {
                classList.remove('active');
                removeFavoriteGif(id);
            } else {
                classList.add('active');
                addFavoriteGif(favoriteGif);
            };
        };
        
    };

    renderGifList = () => {
        const { gif } = this.props
        const { gifs } = gif;
        const gifIds = Object.keys(gifs);

        return gifIds.map(id => {
            const gif = gifs[id];
            const { title, images } = gif;
            const { original: { url } } = images;

            return <li key={id}><Gif id={id} title={title} url={url} /></li>;
        });
    };


    render() {
        return <ul onClick={this.handleClick} className="gif-list">{this.renderGifList()}</ul>
    };
};


export default GifList;