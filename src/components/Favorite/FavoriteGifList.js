import React from 'react';
import Gif from '../Gif/Gif';
import { getGifsAsArray, isPlaceHolder } from '../../helpers/gifs';

const FavoriteGifList = props => {
    const { faveGif, handleGifClick } = props;
    const { favoriteGifs } = faveGif;
    const favoriteGifList = getGifsAsArray(favoriteGifs);
    const renderFavoriteGifs = favoriteGifList
    .map(gif => {
        const { title, images, id } = gif;
        const { original: { url } } = images;

        return (<li key={id}>
                 <Gif id={id} title={title} url={url} placeholder={isPlaceHolder(id)} />
                </li>);
    });

    return ( 
        <ul onClick={handleGifClick} className="gif-list faves">
            {renderFavoriteGifs}
        </ul>
    );
};


export default FavoriteGifList;