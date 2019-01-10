import React from 'react';
import FavoriteGifList from './FavoriteGifList';

const FavoritePage = ({ gif }) => {
    const { favoriteGifs } = gif;
    return (
    <div className="favorite-page">
        <h1 className="favorites-page__title">Favorites</h1>
        <FavoriteGifList favoriteGifs={favoriteGifs} />
    </div>);
};


export default FavoritePage;