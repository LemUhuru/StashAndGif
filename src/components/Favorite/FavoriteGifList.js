import React from 'react';
import Gif from '../Gif/Gif';
import { getGifsAsArray, isPlaceHolder } from '../../helpers/gifs';

const FavoriteGifList = props => {
    const { faveGif, handleGifClick, gifLimit } = props;
    const { favoriteGifs } = faveGif;
    const favoriteGifList = getGifsAsArray(favoriteGifs);
    const renderFavoriteGifs = favoriteGifList.reverse()
    .map(gif => {
        const { title, images, id } = gif;
        const { original: { url } } = images;

        return (<li key={id}>
                 <Gif id={id} title={title} url={url} placeholder={isPlaceHolder(id)} />
                </li>);
    });

    

    return ( 
        <ul onClick={handleGifClick} className="gif-list favorite-list">
            {gifLimit ? renderFavoriteGifs.slice(0, gifLimit) : renderFavoriteGifs}
        </ul>
    );
};


export default FavoriteGifList;