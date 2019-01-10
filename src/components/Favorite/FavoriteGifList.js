import React from 'react';
import Gif from '../Gif/Gif';
import { getGifsAsArray, isPlaceHolder } from '../../helpers/gifs';
import Slider from 'react-slick';

const FavoriteGifList = ({ favoriteGifs, useSlider }) => {
    const sliderSettings = { dots: true, infinite: true, 
        speed: 500, slidesToShow: 5, slidesToScroll: 5, draggable: true}
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
        <ul className="gif-list">
            {renderFavoriteGifs}
        </ul>
    );
};


export default FavoriteGifList;