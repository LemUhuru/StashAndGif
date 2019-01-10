import React from 'react';
import GifListWrapper from '../Gif/GifListWrapperContainer';

const FavoritePage = ({ faveGif }) => {    
    return (
    <div className="favorite-page">
        <h1 className="favorites-page__title">Favorites</h1>
        <GifListWrapper faveGif={faveGif} isFaveList={true}  />
    </div>);
};


export default FavoritePage;