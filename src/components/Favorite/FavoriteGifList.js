import React from 'react';
import Gif from '../Gif/Gif';
import { getGifsAsArray, isPlaceHolder } from '../../helpers/gifs';

const FavoriteGifList = ({ favoriteGifs }) => {
    const favoriteGifList = getGifsAsArray(favoriteGifs)
    .map(gif => {
        console.log(gif, 'its a gif')
        const { title, images, id } = gif;
        const { original: { url } } = images;


        return (<li key={id}>
                 <Gif id={id} title={title} url={url} placeholder={isPlaceHolder(id)} />
                </li>);
    });

    return <ul className="gif-list">{favoriteGifList}</ul>;
};

export default FavoriteGifList;