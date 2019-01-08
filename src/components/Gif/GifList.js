import React, { Component } from 'react';
import Gif from './Gif';
import { removeFavoriteGif } from '../../modules/Gif/actions';

class GifList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: '',
        }
    }

    handleClick = event => {
        const { addFavoriteGif, removeFavoriteGif, gif } = this.props;
        const { gifs, favoriteGifs } = gif;
        const { id, classList } = event.target;
        const faveGif = gifs[id];

        const favoriteIds = Object.keys(favoriteGifs);
        const isFavorited = favoriteIds.includes(id);
        const isFaveButton = classList.contains('fave-btn');

        // Spark animation
        if (isFaveButton) {
            if (isFavorited) {
                classList.remove('active');
                removeFavoriteGif(id);
            } else {
                classList.add('active');
                addFavoriteGif(faveGif);
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