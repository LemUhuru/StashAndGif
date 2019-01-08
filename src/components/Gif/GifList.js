import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: '',
        }
    }

    handleClick = gif => event => {
        const { addFavoriteGif } = this.props;

        addFavoriteGif(gif);
    };

    renderGifList = () => {
        const { gif } = this.props
        const { gifs } = gif;
        const gifIds = Object.keys(gifs);

        return gifIds.map(id => {
            const gif = gifs[id];
            const { title, images } = gif;
            const { original: { url } } = images;

            return (<li onClick={this.handleClick(gif)} key={id}><Gif id={id} title={title} url={url} /></li>);
        });
    };


    render() {
        return <ul onClick={this.handleClick} className="gif-list">{this.renderGifList()}</ul>
    };
};


export default GifList;